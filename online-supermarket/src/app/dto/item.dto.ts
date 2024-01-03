export class Item {

    private _id: number;
    private _name: string;
    private _price: number;

    constructor (
        id: number,
        name: string,
        price: number,
    ) {
        this._id = id;
        this._name = name;
        this._price = price;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }
}