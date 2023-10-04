export interface IAdmin {
    name: string;
    password: string;
}

export interface ICreateAdminRequest extends IAdmin { 
    confirmPassword: string;
}

export interface ICreateAdminResponse extends IAdmin { 

}