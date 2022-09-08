export class User{
    constructor(
        public _token: string,
        public type: string,
        public name: string
        // private _tokenExpirationDate: Date
    ) {}

    //Acess this method as (User)---.token
    get token(){
        // if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) return null
        return this._token
    }
}