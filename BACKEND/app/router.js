const express = require('express');
const router = express.Router();
const getConnection = require('./database');

// Ruta GET para obtener clientes
router.get('/clientes', (req, res) => {
    getConnection((err, connection) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).send('Error al conectar a la base de datos');
            return;
        }

        const query = 'SELECT * FROM Cliente';
        connection.query(query, (err, rows) => {
            connection.release();

            if (err) {
                console.error('Error al obtener datos:', err);
                res.status(500).send('Error al obtener datos de la base de datos');
                return;
            }
            if (!rows || rows.length === 0) {
                res.status(404).send('No se encontraron clientes');
                return;
            }
            res.status(200).json(rows);
        });
    });
});

// Ruta GET para obtener vehiculos
router.get('/vehiculos', (req, res) => {
    getConnection((err, connection) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).send('Error al conectar a la base de datos');
            return;
        }

        const query = 'SELECT * FROM Vehiculo';
        connection.query(query, (err, rows) => {
            connection.release();

            if (err) {
                console.error('Error al obtener datos:', err);
                res.status(500).send('Error al obtener datos de la base de datos');
                return;
            }
            if (!rows || rows.length === 0) {
                res.status(404).send('No se encontraron vehiculos');
                return;
            }
            res.status(200).json(rows);
        });
    });
});

// Ruta GET para obtener contratos
router.get('/contratos', (req, res) => {
    getConnection((err, connection) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            res.status(500).send('Error al conectar a la base de datos');
            return;
        }

        const query = 'SELECT * FROM Contrato';
        connection.query(query, (err, rows) => {
            connection.release();

            if (err) {
                console.error('Error al obtener datos:', err);
                res.status(500).send('Error al obtener datos de la base de datos');
                return;
            }
            if (!rows || rows.length === 0) {
                res.status(404).send('No se encontraron contratos');
                return;
            }
            res.status(200).json(rows);
        });
    });
});
module.exports = router;