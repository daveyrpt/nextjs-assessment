// scripts/seeder.js
import mysql from 'mysql2/promise';

// Database connection
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', 
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'nextjs',
});

// Sample data to insert
const items = [
    ['Item 1', 'This is the first item.'],
    ['Item 2', 'This is the second item.'],
    ['Item 3', 'This is the third item.'],
    ['Item 4', 'This is the fourth item.'],
    ['Item 5', 'This is the fifth item.'],
    ['Item 6', 'This is the sixth item.'],
    ['Item 7', 'This is the seventh item.'],
    ['Item 8', 'This is the eighth item.'],
    ['Item 9', 'This is the ninth item.'],
    ['Item 10', 'This is the tenth item.'],
    ['Item 11', 'Another test item.'],
    ['Item 12', 'Random description for item 12.'],
    ['Item 13', 'Lucky number 13 item.'],
    ['Item 14', 'Another entry for testing.'],
    ['Item 15', 'Some more dummy data.'],
    ['Item 16', 'Item with a generic description.'],
    ['Item 17', 'Just another item in the list.'],
    ['Item 18', 'Something interesting goes here.'],
    ['Item 19', 'More data for pagination testing.'],
    ['Item 20', 'This is a placeholder description.'],
    ['Item 21', 'Generated data item.'],
    ['Item 22', 'Another generic data item.'],
    ['Item 23', 'Testing pagination with this item.'],
    ['Item 24', 'More sample content goes here.'],
    ['Item 25', 'Halfway through the dataset.'],
    ['Item 26', 'Adding another random item.'],
    ['Item 27', 'Yet another item for testing.'],
    ['Item 28', 'More SQL test data incoming.'],
    ['Item 29', 'Randomly generated item.'],
    ['Item 30', 'Testing limit and offset queries.'],
    ['Item 31', 'Item number thirty-one.'],
    ['Item 32', 'We keep going with more items.'],
    ['Item 33', 'Another list entry for pagination.'],
    ['Item 34', 'Just filler text for this item.'],
    ['Item 35', 'Item with a longer description just for fun.'],
    ['Item 36', 'Testing database performance with this one.'],
    ['Item 37', 'Let’s keep adding data.'],
    ['Item 38', 'Random database entry for testing.'],
    ['Item 39', 'Another placeholder item.'],
    ['Item 40', 'Item used for debugging pagination.'],
    ['Item 41', 'An extra item in the database.'],
    ['Item 42', 'The answer to everything, and also an item.'],
    ['Item 43', 'Just another row in the database.'],
    ['Item 44', 'Filling up the database with content.'],
    ['Item 45', 'Testing SQL queries with this item.'],
    ['Item 46', 'Nearly at the end of the list.'],
    ['Item 47', 'Database entry for testing pagination.'],
    ['Item 48', 'A sample item for development.'],
    ['Item 49', 'Random SQL data entry.'],
    ['Item 50', 'Final item in this test dataset.'],
  ];



async function seed() {
    try {
      console.log('Seeding database...');
      await db.query('DELETE FROM items');
      // Prepare SQL statement for bulk insert
      const sql = 'INSERT INTO items (name, description) VALUES ?';
  
      // Insert data into the database in bulk
      await db.query(sql, [items]);
  
      console.log('Seeding complete!');
    } catch (error) {
      console.error('Error during seeding:', error);
    } finally {
      await db.end(); // Close the database connection
    }
  }

seed();
