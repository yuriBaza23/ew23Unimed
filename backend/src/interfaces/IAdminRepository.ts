import { IAdmin } from "./IAdmin";

export interface IAdminRepository {
    insert(input: IAdmin): Promise<void>;
    get(input: IAdmin["name"]): Promise<IAdmin>;
    update(input: IAdmin): Promise<void>
}