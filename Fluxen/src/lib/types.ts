export interface Client {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    created_at: string;
}

export interface Quote {
    id: number;
    client_id: number;
    title: string;
    status: 'draft' | 'sent' | 'accepted' | 'rejected';
    total_ht: number;
    tax_rate: number;
    created_at: string;
}

export interface QuoteLine {
    id: number;
    quote_id: number;
    description: string;
    quantity: number;
    unit_price: number;
    position: number;
}