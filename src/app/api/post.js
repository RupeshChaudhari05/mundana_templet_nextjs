import { connection } from "./connection";


export default function handler(req, res) {
  // Connect to the database
  connection.connect();

  // Query to fetch all posts
  const query = 'SELECT * FROM post';

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving posts:', error);
      res.status(500).json({ error: 'Error retrieving posts' });
    } else {
      res.status(200).json(results);
    }
  });

  // Close the connection
  connection.end();
}



