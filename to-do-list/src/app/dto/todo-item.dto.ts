export class TodoItem {
    private id: number;
    private description: string;
    private isCompleted: boolean;

    constructor{
        id: number,
        description: string,
        isCompleted: boolean
    }   {
        this._id = id;
        this._description = description;
        this._isCompleted = isCompleted;
    }

    public get id(): number{
        return this.id;
    }

    public get description(): string{
        return this.description;
    }

    public get isCompleted(): boolean{
        return this.isCompleted;
    }

    public set id(id: number){
        this.id = id;
    }

    public set description(): string{
        return this.description;
    }

    public set isCompleted(): boolean{
        return this.isCompleted;
    }
}