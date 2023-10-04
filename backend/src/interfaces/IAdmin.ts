export interface IAdmin {
    name: string;
    password: string;
}

export interface ICreateAdminRequest extends IAdmin { 
    confirmPassword: string;
}

export interface ICreateAdminResponse extends IAdmin { 

}

export interface IUpdateAdminRequest extends IAdmin {
    confirmPassword: string;
    oldPassword: string;
}

export interface IUpdateAdminResponse extends IAdmin {
    
}