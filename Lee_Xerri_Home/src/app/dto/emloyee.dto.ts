export class Employee {

    private _id: number;
    private _email: string;
    private _password: string;
    private _role: string;

    constructor (
        id: number,
        email: string,
        password: string,
        role: string
    ) {
        this._id = id;
        this._email = email,
        this._password = password,
        this._role = role
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

    public get role(): string {
        return this._role;
    }

    public set role(role: string) {
        this._role = role;
    }
}