const express = require('express');
const router = express.Router();
const con = require('../db/config');

// Get all details from tables
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM commission_types';
    con.query(sql, (err, results) => {
        if (err) return res.json('Error');
        return res.json(results);
    });
});


// Delete data from  tables
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM commission_types WHERE id = ?';
    const id = req.params.id;
    con.query(sql, [id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});


// add data in tables
router.post('/create', (req, res) => {
    const sql = 'INSERT INTO commission_types (name) VALUES (?)';
    const values = [req.body.name];
    con.query(sql, [values], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

// update data in tables
router.put('/edit/:id', (req, res) => {
    const sql = 'UPDATE commission_types SET name = ? WHERE id = ?';
    const values = [req.body.name];
    const id = req.params.id;
    con.query(sql, [...values, id], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM commission_types WHERE id = ?';
    con.query(sql, [id], (err, results) => {
        if (err) return res.json('Error');
        return res.json(results);
    });
});

module.exports = router;

// Get all details from tables
// router.get('/', (req, res) => {
//     const query = 'SELECT * FROM commission_types';
//     con.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//             return;
//         }
//         res.json(results);
//     });
// });

// Delete data from  tables
// router.delete('/:id', (req, res) => {
//     const commissionTypeId = req.params.id;
//     const query = 'DELETE FROM commission_types WHERE id = ?';
//     con.query(query, [commissionTypeId], (err, result) => {
//         if (err) return res.json(err);
//         return res.json('Commission type deleted successfully.');
//     });
// });


// add data in tables
// router.post('/', (req, res) => {
//     const { name } = req.body;
//     console.log('Received name:', name);
//     const query = 'INSERT INTO commission_types (name) VALUES (?)';
//     con.query(query, [name], (err, result) => {
//         if (err) {
//             console.error('Error inserting commission type:', err);
//             return res.status(500).json({ success: false, error: 'Internal Server Error' });
//         }
//         console.log('Inserted commission type:', result);
//         return res.status(200).json({ success: true, message: 'Commission type added successfully' });
//     });
// });

// update data in tables
// router.post('/update', (req, res) => {
//     const id = req.query.id; // Get the id from URL parameters
//     const name = req.query.name; // Get the name from URL parameters

//     // Construct the SQL query to update the commission type
//     const query = 'UPDATE commission_types SET name = ? WHERE id = ?';
//     const values = [name, id];

//     con.query(query, values, (err, data) => {
//         if (err) {
//             console.error('Error updating commission type:', err);
//             return res.status(500).json({ success: false, error: 'Internal Server Error' });
//         }
//         return res.status(200).json({ success: true, message: 'Commission type updated successfully' });
//     });
// });
