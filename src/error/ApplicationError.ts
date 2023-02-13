
export class ApplicationError{
    public readonly message:string;
    public readonly statusCode:number;

    constructor(message,statusCode){
        this.message = message;
        this.statusCode = statusCode;
    }

}