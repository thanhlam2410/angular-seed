export class AccessResponse {
    public success: Boolean;
    public message: String;

    static parse(data: any) {
        if (!data) {
            return null;
        }

        let instance = new AccessResponse();
        instance.success = data.code === 1 ? data.success : false;
        instance.message = data.message;
        return instance;
    }
}