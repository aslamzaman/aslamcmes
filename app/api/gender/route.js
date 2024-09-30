import { NextResponse } from 'next/server';
import { openDB } from '@/lib/db';



export const GET = async () => {
    try {
        const db = await openDB();
        const result = await db.all('SELECT *FROM genders');
        console.log(result);
        return NextResponse.json(result);
    } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json({ message: 'Failed to fetch genders' }, { status: 500 });
    }
}



export const POST = async (Request) => {
    try {
        const db = await openDB();
        const { id, name } = await Request.json();
        const result = await db.run('INSERT INTO genders (id, name) VALUES (?, ?)', [id, name]);
        console.log(result);
        return NextResponse.json(result);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "POST Error", err }, { status: 500 });
    }
}