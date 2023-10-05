import { PrismaClient } from "@prisma/client";
import { IClient } from "../interfaces/IClient";
import { IClientRepository } from "../interfaces/IClientRepository";

let prisma = new PrismaClient();

export class ClientRepository implements IClientRepository {
    async insert(input: IClient): Promise<void> {
        await prisma.patient.create({
            data: { ...input }
        })        
    }

    async insertService(id: string, ids: string): Promise<void> {
        let result = await prisma.patient.findUnique({
            where: { id }
        })

        if(!result) throw new Error("Client not found");

        await prisma.patient.update({
            where: { id },
            data: {
                ...result
            }
        })
    }

    async read(id: string): Promise<IClient> {
        let result = await prisma.patient.findUnique({
            where: { id }
        })

        if(!result) throw new Error("Client not found");

        return result;
    }

    async update(input: IClient): Promise<void> {
        let id = input.id
        
        await prisma.patient.update({
            where: { id },
            data: { ...input }
        })
    }
}