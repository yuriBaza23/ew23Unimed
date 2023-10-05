import { IAdmin } from "../interfaces/IAdmin";

export class Admin {
    private _name: IAdmin["name"];
    private _password: IAdmin["name"];

    private constructor(name: IAdmin["name"], password: IAdmin["password"]) {
        this._name = name;
        this._password = password;
    }

    static create(name: IAdmin["name"], password: IAdmin["password"]): Admin {
        return new Admin(name, password);
    }

    public toJSON(): IAdmin {
        return {
            name: this._name,
            password: this._password
        }
    }
}