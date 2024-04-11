import path from 'node:path'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

async function openDb () {
    return open ({
        filename: path.join(process.cwd(), 'bd'),
        driver: sqlite3.Database
    })
}

export async function loadTask() {
    const db = await openDb()
    const data = await db.all('SELECT * FROM tasks')

    return data
}

