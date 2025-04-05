export interface ApiOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: unknown;
    headers?: HeadersInit;
    queryParams?: Record<string, string | number>;
}