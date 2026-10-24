const express = require('express');
const router = express.Router();
const con = require('../db/config');

// Get all details from tables
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM network_softwares';
    con.query(sql, (err, results) => {
        if (err) return res.json('Error');
        return res.json(results);
    });
});

// Delete data from  tables
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM network_softwares WHERE id = ?';
    const id = req.params.id;
    con.query(sql, [id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

// add data in tables
router.post('/create', (req, res) => {
    const sql = 'INSERT INTO network_softwares (name) VALUES (?)';
    const values = [req.body.name];
    con.query(sql, [values], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

// update data in tables
router.put('/:id', (req, res) => {
    const sql = 'UPDATE network_softwares SET name = ? WHERE id = ?';
    const values = [req.body.name];
    const id = req.params.id;
    con.query(sql, [...values, id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});


// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     const sql = 'SELECT * FROM network_softwares WHERE id = ?';
//     con.query(sql, [id], (err, results) => {
//         if (err) return res.json('Error');
//         return res.json(results);
//     });
// });

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM network_softwares WHERE id = ?';
    con.query(sql, [id], (err, results) => {
        if (err) return res.json('Error');
        return res.json(results[0]); // Ensure it returns a single object, not an array
    });
});


module.exports = router;
