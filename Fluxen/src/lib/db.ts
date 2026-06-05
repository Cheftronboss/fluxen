import Database from '@tauri-apps/plugin-sql';

let db: Database | null = null;

export async function getDb(): Promise<Database> {
    if (!db) {
        db = await Database.load('sqlite:fluxen.db');
    }
    return db;
}

// Exemples de requêtes typées
export async function fetchClients() {
    const db = await getDb();
    return db.select<Client[]>('SELECT * FROM clients ORDER BY name ASC');
}

export async function fetchQuotesByClient(clientId: number) {
    const db = await getDb();
    return db.select<Quote[]>(
        'SELECT * FROM quotes WHERE client_id = ? ORDER BY created_at DESC',
        [clientId]
    );
}