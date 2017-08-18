export class Validator {
    static ValidateEmail(email: any) {
        let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    }

    static ValidatePhone(phone: any) {
        let emailRegex = /[0,+84][1,9,8][0-9]{8,10}/
        return emailRegex.test(phone);
    }

    static ValidateUsername(phone: any) {
        let emailRegex = /^[a-zA-Z0-9_]*$/
        return emailRegex.test(phone);
    }
}