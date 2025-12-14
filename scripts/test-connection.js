//testing script for connection
require('dotenv').config();
const { Client } = require('pg');

async function testConnection() {
    const client = new Client({
        connectionString: process.env.DB_URL,
    });

    try {
        console.log('Connecting to NeonDB');
        
        await client.connect();
        console.log('Connected to NeonDB');

        console.log('Connection successful!');
        
    } catch (error) {
        console.error('Connection failed:', error.message);
        process.exit(1);
    } finally {
        await client.end();
    }
}

testConnection();
