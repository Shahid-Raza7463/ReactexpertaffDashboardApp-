const express = require('express');
const cors = require('cors');
const con = require("./db/config");
const commissionRoutes = require('./routes/commissionRoutes');
const networkSoftwareRoutes = require('./routes/networkSoftwareRoutes');


// const bodyParser = require('body-parser');// Import body-parser

const app = express();
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

// Use commission routes
app.use('/commission', commissionRoutes);
// Use network software routes
app.use('/networksoftware', networkSoftwareRoutes);



app.get('/blogs', (req, res) => {
    const sql = 'SELECT * FROM blogs';
    con.query(sql, (err, results) => {
        if (err) return res.json('Error');
        return res.json(results);
    });
});
app.get('/verticals', (req, res) => {
    const sql = 'SELECT * FROM verticals';
    con.query(sql, (err, results) => {
        if (err) return res.json('Error');
        return res.json(results);
    });
});

// app.get('/blogs', (req, res) => {
//     // const query = 'SELECT * FROM customers';
//     const query = 'SELECT * FROM blogs';

//     con.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//             return;
//         }

//         res.json(results);
//     });
// });
// find data in node js routre 5000
app.get('/', (req, res) => {
    // const query = 'SELECT * FROM customers';
    const query = 'SELECT * FROM users';

    con.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(results);
    });
});

// Fetch user by I

// show data on view
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    con.query(sql, [id], (err, results) => {
        if (err) return res.json('Error');
        return res.json(results);
    });
});

// add data in tables
// app.post('/users/create', (req, res) => {
//     const sql = 'INSERT INTO users (name) VALUES (?)';
//     const values = [req.body.name];
//     con.query(sql, [values], (err, data) => {
//         if (err) return res.json('Error');
//         return res.json(data);
//     });
// });
app.post('/users/create', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const values = [name, email, password];
    con.query(sql, values, (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});


// app.put('/users/edit/:id', (req, res) => {
//     const sql = 'UPDATE users SET name = ? WHERE id = ?';
//     const values = [req.body.name];
//     const id = req.params.id;
//     con.query(sql, [...values, id], (err, data) => {
//         if (err) return res.json('Error');
//         return res.json(data);
//     });
// });




// find data in node js routre 5000
app.get('/contactus', (req, res) => {
    // const query = 'SELECT * FROM customers';
    const query = 'SELECT * FROM contactus';

    con.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(results);
    });
});


// app.get('/networks', (req, res) => {
//     // const query = 'SELECT * FROM customers';
//     const query = 'SELECT * FROM networks';

//     con.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//             return;
//         }

//         res.json(results);
//     });
// });

// resources\views\web\pages\home\home_sponsored.blade.php

app.get('/networks', (req, res) => {
    const query = `
        SELECT 
            n.network_id, n.network_name, n.network_type, n.network_url, 
            n.network_description, n.offer_count, n.min_payout, n.referral_commission, 
            n.affiliate_tracking_software, n.logo, n.review_count, n.rating, 
            n.tracking_link, n.is_sponsored, n.is_top_network, n.is_featured, 
            n.network_slug, n.status, nr.all_rating, nr.offer_rating, 
            nr.payout_rating, nr.tracking_rating, nr.support_rating, nr.review_text, 
            nr.review_img, nr.review_id, nr.created_at,
            GROUP_CONCAT(DISTINCT CONCAT(v.title, ':', v.icon)) AS verticals_titles,
            GROUP_CONCAT(DISTINCT nfl.name) AS name,
            GROUP_CONCAT(DISTINCT pl.name) AS payment_lists,
            GROUP_CONCAT(DISTINCT ct.name) AS commission_type
        FROM 
            networks AS n
        LEFT JOIN 
            network_review AS nr ON nr.network_id = n.network_id
        LEFT JOIN 
            network_verticals AS nv ON nv.network_id = n.network_id
        LEFT JOIN 
            verticals AS v ON nv.vertical_id = v.id
        LEFT JOIN 
            network_payout_frequency AS npf ON npf.network_id = n.network_id
        LEFT JOIN 
            net_frequency_lists AS nfl ON npf.payment_frequency = nfl.id
        LEFT JOIN 
            network_payment_method AS npm ON n.network_id = npm.network_id
        LEFT JOIN 
            payment_lists AS pl ON npm.payment_method = pl.id
        LEFT JOIN 
            networks_commission_type AS nct ON nct.network_id = n.network_id
        LEFT JOIN 
            commission_types AS ct ON nct.commission_type = ct.id
        GROUP BY 
            n.network_id
    `;

    con.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(results);
    });
});


// // #########################################################################
// //   commission_types
// // #########################################################################


// // app.post("/commission", (req, res) => {
// //     const query = "INSERT INTO commission_types (`id`,`name`) VALUES (?)";
// //     const values = [
// //         req.body.id,
// //         req.body.name
// //     ]
// //     con.query(query, [values], (err, data) => {
// //         if (err) return res.json(err)
// //         return res.json("Book has been added.")
// //     })

// // })
// // app.post("/commission", (req, res) => {
// //     const id = req.query.id; // Get the id from URL parameters
// //     const name = req.query.name; // Get the name from URL parameters

// //     const query = "INSERT INTO commission_types (`id`, `name`) VALUES (?, ?)";
// //     const values = [id, name];

// //     con.query(query, values, (err, data) => {
// //         if (err) {
// //             console.error('Error inserting commission type:', err);
// //             return res.status(500).json({ success: false, error: 'Internal Server Error' });
// //         }
// //         return res.status(200).json({ success: true, message: 'Commission type added successfully' });
// //     });
// // });

// app.get('/commission', (req, res) => {
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

// app.delete("/commission/:id", (req, res) => {
//     const commissionTypeId = req.params.id;
//     const query = 'DELETE FROM commission_types WHERE id = ?';
//     con.query(query, [commissionTypeId], (err, result) => {
//         if (err) return res.json(err)
//         return res.json("Commission type deleted successfully.")
//     })
// })
// app.post("/commission", (req, res) => {
//     const { name } = req.body;
//     console.log('Received name:', name);
//     const query = "INSERT INTO commission_types (name) VALUES (?)";
//     con.query(query, [name], (err, result) => {
//         if (err) {
//             console.error('Error inserting commission type:', err);
//             return res.status(500).json({ success: false, error: 'Internal Server Error' });
//         }
//         console.log('Inserted commission type:', result);
//         return res.status(200).json({ success: true, message: 'Commission type added successfully' });
//     });
// });

// app.post("/commission/update", (req, res) => {
//     const id = req.query.id; // Get the id from URL parameters
//     const name = req.query.name; // Get the name from URL parameters

//     // Construct the SQL query to update the commission type
//     const query = "UPDATE commission_types SET name = ? WHERE id = ?";
//     const values = [name, id];

//     con.query(query, values, (err, data) => {
//         if (err) {
//             console.error('Error updating commission type:', err);
//             return res.status(500).json({ success: false, error: 'Internal Server Error' });
//         }
//         return res.status(200).json({ success: true, message: 'Commission type updated successfully' });
//     });
// });




// // #########################################################################
// //    network_softwares
// // #########################################################################

// app.get("/networksoftware", (req, res) => {
//     const sql = "SELECT * FROM network_softwares";
//     con.query(sql, (err, results) => {
//         if (err) return res.json("Error");
//         return res.json(results);
//     });
// });

// app.delete('/networksoftware/:id', (req, res) => {
//     const sql = "DELETE FROM network_softwares WHERE id = ?";
//     const id = req.params.id;
//     con.query(sql, [id], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

// app.post('/networksoftware/create', (req, res) => {
//     // const sql = "INSERT INTO network_softwares (name, email) VALUES (?)";
//     const sql = "INSERT INTO network_softwares (name) VALUES (?)";
//     const values = [
//         req.body.name,
//         // req.body.name,
//     ];
//     con.query(sql, [values], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

// app.put('/networksoftware/:id', (req, res) => {
//     // const sql = "UPDATE network_softwares SET Name = ?, Email = ? WHERE id = ?";
//     const sql = "UPDATE network_softwares SET name = ? WHERE id = ?";
//     const values = [
//         req.body.name,
//         // req.body.email
//     ];
//     const id = req.params.id;
//     con.query(sql, [...values, id], (err, data) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

// // app.get('/editsoftware/:id', (req, res) => {
// //     const id = req.params.id;
// //     const sql = "SELECT * FROM network_softwares WHERE id = ?";
// //     con.query(sql, [id], (err, results) => {
// //         if (err) return res.status(500).json({ error: "Internal Server Error" });
// //         if (results.length === 0) return res.status(404).json({ error: "Software not found" });
// //         return res.json(results[0]);
// //     });
// // });


// app.get('/editsoftware/:id', (req, res) => {
//     const id = req.params.id;
//     const sql = "SELECT * FROM network_softwares WHERE id = ?";
//     con.query(sql, [id], (err, results) => {
//         if (err) return res.json("Error");
//         return res.json(results);
//     });
// });


// // #########################################################################
// //    network_softwares end hare
// // #########################################################################



// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

app.listen(5000);