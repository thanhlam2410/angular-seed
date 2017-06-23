export class VerifyResponse {
    public registeredOn: Boolean;
    public email: String;
    public newUser: Boolean;
    public nickName: String;

    static parse(data: any) {
        if (!data) {
            return null;
        }

        let instance = new VerifyResponse();
        instance.registeredOn = data.registeredOn;
        instance.email = data.email;
        instance.newUser = data.newUser;
        instance.nickName = data.nickName ? data.nickName : "";
        return instance;
    }
}