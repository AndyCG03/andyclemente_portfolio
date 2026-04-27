// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// ============================================================
// SERVIR ARCHIVOS ESTÁTICOS DESDE LA CARPETA "public"
// ============================================================
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz explícita (opcional, pero buena práctica)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================================
// ENDPOINT PARA EL ASISTENTE
// ============================================================
app.post('/api/assistant', async (req, res) => {
    const apiKey = process.env.OPENROUTER_KEY;
    
    console.log('🔍 API Key existe?', apiKey ? 'Sí' : 'No');
    console.log('📦 Body recibido:', req.body.messages ? 'OK' : 'Vacío');
    
    if (!apiKey) {
        console.error('❌ OPENROUTER_KEY no encontrada en .env');
        return res.status(500).json({ 
            error: 'OpenRouter key not configured. Create .env file with OPENROUTER_KEY=sk-or-v1-tu-key' 
        });
    }

    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ 
            error: 'Invalid request: messages array required' 
        });
    }

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': 'http://localhost:3000',
                'X-Title': 'Andy Clemente Portfolio'
            },
            body: JSON.stringify({
                model: 'openrouter/free',
                messages: messages,
                max_tokens: 500,
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('❌ OpenRouter error:', data);
            return res.status(response.status).json({
                error: data.error?.message || 'Error from OpenRouter API'
            });
        }

        console.log('✅ Respuesta de OpenRouter exitosa');
        res.json(data);

    } catch (error) {
        console.error('❌ Error interno:', error);
        res.status(500).json({ 
            error: 'Internal server error: ' + error.message 
        });
    }
});

// ============================================================
// ENDPOINT DE VERIFICACIÓN
// ============================================================
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        hasApiKey: !!process.env.OPENROUTER_KEY,
        keyPrefix: process.env.OPENROUTER_KEY ? 
            process.env.OPENROUTER_KEY.substring(0, 10) + '...' : 'none'
    });
});

// ============================================================
// MANEJO DE RUTAS NO ENCONTRADAS (404)
// ============================================================
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`\n✅ Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📡 Endpoint: http://localhost:${PORT}/api/assistant`);
    console.log(`🔑 OpenRouter key: ${process.env.OPENROUTER_KEY ? '✅ Configurada' : '❌ No configurada'}`);
    console.log(`📁 Sirviendo archivos desde: ${path.join(__dirname, 'public')}`);
    console.log(`\n💡 Si ves "❌ No configurada", crea el archivo .env con:\n   OPENROUTER_KEY=sk-or-v1-tu-key-aqui\n`);
});