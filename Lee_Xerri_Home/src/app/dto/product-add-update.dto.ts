export class ProductAddUpdate {
    private _name: string;
    private _code: string;
    private _releaseDate: Date;
    private _description: string;
    private _price: number;
    private _starRating: number;
    private _imageUrl: string;

    constructor (
        name: string,
        code: string,
        releaseDate: Date,
        description: string,
        price: number,
        starRating: number,
        imageUrl: string

    ) {
        this._name = name;
        this._code = code;
        this._releaseDate = releaseDate;
        this._description = description;
        this._price = price;
        this._starRating = starRating;
        this._imageUrl = imageUrl;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get code(): string {
        return this._code;
    }

    public set code(code: string) {
        this._code = code;
    }

    public get releaseDate(): Date {
        return this._releaseDate;
    }

    public set releaseDate(releaseDate: Date) {
        this._releaseDate = releaseDate;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get starRating(): number {
        return this._starRating;
    }

    public set starRating(starRating: number) {
        this._starRating = starRating;
    }

    public get imageUrl(): string {
        return this._imageUrl;
    }

    public set imageUrl(imageUrl: string) {
        this._imageUrl = imageUrl;
    }
}