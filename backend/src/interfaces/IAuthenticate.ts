import { IAdmin } from "./IAdmin";

export interface IAuthenticateRequest extends IAdmin {

}

export interface IAuthenticateResponse {
    admin: IAdmin;
    token: string;
}