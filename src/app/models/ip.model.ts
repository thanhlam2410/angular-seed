export class IpModel {
    public ip: String;

    static parse(data: any) {
        if (!data) {
            return null;
        }

        let instance = new IpModel();
        instance.ip = data.ip ? data.ip : "127.0.0.1";
        return instance;
    }
}