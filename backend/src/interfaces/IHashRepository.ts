export interface IHashRepository{
    cryptographie (password: string): Promise<string>;
    uncryptographie (password: string, cryptographicPassword: string): Promise<boolean>;
}