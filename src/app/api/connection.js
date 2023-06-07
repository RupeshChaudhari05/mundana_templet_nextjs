import { createConnection } from 'mysql';

// Create a connection
export const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mundana_blog'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL database!');

  // Perform database operations here
  // ...
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection: ' + err.stack);
    return;
  }

  console.log('MySQL connection closed.');
});
