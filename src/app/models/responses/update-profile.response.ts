export class UpdateProfileResponse {
    public success: Boolean;
    public message: String;
    public nickname: String;

    static parse(data: any) {
        if (!data) {
            return null;
        }

        let instance = new UpdateProfileResponse();
        instance.success = data.code === 1 ? data.success : false;
        instance.message = data.message;
        instance.nickname = data.nickname ? data.nickname : "";
        return instance;
    }
}