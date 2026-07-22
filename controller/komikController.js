const db = require('../models');

async function getAllkomik(req, res) {
    try {
        const komik = await db.komik.findAll();
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error fetching komik:', err.message);
        res.status(500).json({ error: 'Failed to fetch komik' });
    }
}

async function getkomikById(req, res) {
    const { id } = req.params;
    try
}