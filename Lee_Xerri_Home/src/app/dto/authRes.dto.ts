export class authRes {

    private _accessToken: string;
    private _tokenType: string;

    constructor (
        accessToken: string,
        tokenType: string,
    ) {
        this._accessToken = accessToken,
        this._tokenType = tokenType
    }

    public get accessToken(): string {
        return this._accessToken;
    }

    public set accessToken(accessToken: string) {
        this._accessToken = accessToken;
    }

    public get tokenType(): string {
        return this._tokenType;
    }

    public set tokenType(tokenType: string) {
        this._tokenType = tokenType;
    }
}