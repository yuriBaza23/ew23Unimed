import { PrismaClient } from "@prisma/client";
import { IService } from "../interfaces/IService";
import { IServiceRepository } from "../interfaces/IServiceRepository";

const prisma = new PrismaClient();

export class ServiceRepository implements IServiceRepository {
    async insert(input: IService): Promise<void> {
        await prisma.service.create({
            data: { input }
        })
    }

    async read(code: string): Promise<IService> {
        let result = await prisma.service.findUnique({
            where: { code }
        })    

        if(!result) throw new Error("Service not found");
        return result;
    }
}