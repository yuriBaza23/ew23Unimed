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

    async update(input: IAdmin): Promise<void> {
        let name = input.name;
        let result = await prisma.admin.findUnique({
            where: { name }
        })

        if(!result) throw new Error('This admin does not exists');

        await prisma.admin.update({
            where: { name },
            data: {
                password: input.password
            }
        })
    }
}