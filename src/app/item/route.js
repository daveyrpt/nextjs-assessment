import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',  
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'nextjs',
});

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')) || 1; 
    const limit = parseInt(searchParams.get('limit')) || 5; 
    const offset = (page - 1) * limit;

    const [rows] = await db.query('SELECT * FROM items LIMIT ? OFFSET ?', [limit, offset]);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}
