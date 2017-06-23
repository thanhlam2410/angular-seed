/**
 * Created by haole on 6/9/17.
 */
export class TradeModel {
    // Property (public by default)
    author: string;
    cost: number;
    quantity: number;
    unit: string;
    currencyUnit: string
    bankName: string;

    // Constructor
    constructor(author: string,
                cost: number,
                quantity: number,
                unit: string,
                currencyUnit: string,
                bankName: string) {
        this.author = author;
        this.cost = cost;
        this.quantity = quantity;
        this.unit = unit;
        this.currencyUnit = currencyUnit;
        this.bankName = bankName;
    }

}