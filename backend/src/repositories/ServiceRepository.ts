import { PrismaClient } from "@prisma/client";
import { IService } from "../interfaces/IService";
import { IServiceRepository } from "../interfaces/IServiceRepository";

const prisma = new PrismaClient();
export class ServiceRepository implements IServiceRepository {
    async insert(input: any): Promise<void> {
        await prisma.service.create({
            data: { ...input }
        })
    }

    async read(id: string): Promise<IService> {
        let result = await prisma.service.findUnique({
            where: { id }
        })    

        if(!result) throw new Error("Service not found");
        return result;
    }

    async readAll(): Promise<IService[]> {
        return await prisma.service.findMany();
    }
}