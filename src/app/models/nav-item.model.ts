export class NavItemModel {
    title: string;
    className: string;
    // Constructor
    constructor(title: string, className: string) {
        this.title = title;
        this.className = className;// class name must be active, focus, inactive
    }
}