import { PrismaClient } from "@prisma/client";
import { IAdmin } from "../interfaces/IAdmin";
import { IAdminRepository } from "../interfaces/IAdminRepository";

let prisma = new PrismaClient();

export class AdminRepository implements IAdminRepository {
    async insert(input: IAdmin): Promise<void> {
        await prisma.admin.create({
            data: { ...input }
        })
    }

    async get(name: IAdmin["name"]): Promise<IAdmin> {
        let result = await prisma.admin.findUnique({
            where: { name }
        })

        if(!result) throw new Error('This admin does not exists');

        return result;
    }
}