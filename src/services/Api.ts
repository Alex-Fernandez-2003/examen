import { ApiOptions } from "../components/types/ApiOptions";

  
  export const fetchApi = async <T>(
    endpoint: string,
    options: ApiOptions = { method: 'GET' }
  ): Promise<T> => {
    try {
      const url = new URL(endpoint);
      if (options.queryParams && options.method === 'GET') {
        Object.entries(options.queryParams).forEach(([key, value]) => {
          url.searchParams.append(key, String(value));
        });
      }
  
      const config: RequestInit = {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      };
  
      if (options.method !== 'GET' && options.body) {
        config.body = JSON.stringify(options.body);
      }
  
      const response = await fetch(url.toString(), config);
      const responseText = await response.text();
  
      if (response.status === 204 || responseText.trim() === '') {
        return {} as T;
      }
  
      if (!response.ok) {
        const errorData = responseText ? JSON.parse(responseText) : {};
        throw new Error(
          errorData.message || `Error ${response.status}: ${response.statusText}`
        );
      }
  
      return JSON.parse(responseText) as T;
    } catch (error) {
      const errorMessage =
        error instanceof SyntaxError
          ? 'Invalid server response'
          : error instanceof Error
          ? error.message
          : 'Unknown error';
  
      console.error(`API Error [${options.method} ${endpoint}]:`, errorMessage);
      throw new Error(errorMessage);
    }
  };