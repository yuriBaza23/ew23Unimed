import { PrismaClient } from "@prisma/client";
import { IIllness } from "../interfaces/IIllness";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

let prisma = new PrismaClient();

export class IllnessRepository implements IIllnessRepository {
    async insert(input: IIllness): Promise<void> {
        await prisma.illness.create({
            data: {
                ...input
            }
        })
    }

    async read(id: string): Promise<IIllness> {
        let result = await prisma.illness.findUnique({
            where: { id }
        })

        if(!result) throw new Error('Illness not found')
        return result;
    }

    async readAll(): Promise<IIllness[]> {
        return await prisma.illness.findMany()
    }
}