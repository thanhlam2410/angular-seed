export class BaseService {
    protected handleResponse(response: any): Promise<any> {
        let data = response.json() || null;
        return Promise.resolve(data);
    }

    protected handleError(error: any): Promise<any> {
        let detail = error.message || error.json();
        console.error('An error occurred', detail); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}