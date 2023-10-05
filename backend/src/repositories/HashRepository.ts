import { IHashRepository } from "../interfaces/IHashRepository";
import * as bcrypt from 'bcrypt'

export class HashRepository implements IHashRepository {
    async cryptographie(password: string): Promise<string> {
        return await bcrypt.hash(password, 1);
    }

    async uncryptographie(password: string, cryptographicPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, cryptographicPassword);
    }
}