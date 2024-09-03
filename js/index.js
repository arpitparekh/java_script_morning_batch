// database_integration.js
import mysql from 'mysql2';

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host, usually 'localhost'
    user: 'root', // Replace with your MySQL username
    password: 'Walden0042$$', // Replace with your MySQL password
    database: 'javascript_batch', // Replace with your MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Example query to test connection
// connection.query('SELECT 1 + 1 AS solution', (err, results) => {
//     if (err) throw err;
//     console.log('The solution is: ', results[0].solution);

//     // Close the connection
//     connection.end();
// });
