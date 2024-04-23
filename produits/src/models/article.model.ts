export interface Article {
    id: number;
    productName: string;
    price?: number;
    quantity?: number;
    isImported?: boolean;
    category: string;
}