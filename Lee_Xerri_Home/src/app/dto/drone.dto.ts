export class Drone {

    private _id: number;
    private _serialNumber: string;
    private _brandName: string;
    private _model: string;
    private _ownerIdCardNumber: string;
    private _ownerFirstName: string;
    private _ownerLastName: string;
    private _ownerContactNumber: string;
    private _ownerEmailAddress: string;

    constructor (
        id: number,
        serialNumber: string,
        brandName: string,
        model: string,
        ownerIdCardNumber: string,
        ownerFirstName: string,
        ownerLastName: string,
        ownerContactNumber: string,
        ownerEmailAddress: string
    ) {
        this._id = id;
        this._serialNumber = serialNumber;
        this._brandName = brandName;
        this._model = model;
        this._ownerIdCardNumber = ownerIdCardNumber;
        this._ownerFirstName = ownerFirstName;
        this._ownerLastName = ownerLastName;
        this._ownerContactNumber = ownerContactNumber;
        this._ownerEmailAddress = ownerEmailAddress;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get serialNumber(): string {
        return this._serialNumber;
    }

    public set serialNumber(serialNumber: string) {
        this._serialNumber = serialNumber;
    }

    public get brandName(): string {
        return this._brandName;
    }

    public set brandName(brandName: string) {
        this._brandName = brandName;
    }

    public get model(): string {
        return this._model;
    }

    public set model(model: string) {
        this._model = model;
    }

    public get ownerIdCardNumber(): string {
        return this._ownerIdCardNumber;
    }

    public set ownerIdCardNumber(ownerIdCardNumber: string) {
        this._ownerIdCardNumber = ownerIdCardNumber;
    }

    public get ownerFirstName(): string {
        return this._ownerFirstName;
    }

    public set ownerFirstName(ownerFirstName: string) {
        this._ownerFirstName = ownerFirstName;
    }

    public get ownerLastName(): string {
        return this._ownerLastName;
    }

    public set ownerLastName(ownerLastName: string) {
        this._ownerLastName = ownerLastName;
    }

    public get ownerContactNumber(): string {
        return this._ownerContactNumber;
    }

    public set ownerContactNumber(ownerContactNumber: string) {
        this._ownerContactNumber = ownerContactNumber;
    }

    public get ownerEmailAddress(): string {
        return this._ownerEmailAddress;
    }

    public set ownerEmailAddress(ownerEmailAddress: string) {
        this._ownerEmailAddress = ownerEmailAddress;
    }
}