import { PrismaClient } from "@prisma/client";
import { IIllness, IIllnessOutput } from "../interfaces/IIllness";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

let prisma = new PrismaClient();

export class IllnessRepository implements IIllnessRepository {
    async insert(input: IIllness): Promise<void> {
        await prisma.illness.create({
            data: {
                id: input.id!,
                ...input
            }
        })
    }

    async read(id: string): Promise<IIllness> {
        let result =  await prisma.illness.findUnique({
            where: { id }
        })
        if(!result) throw new Error('Illness not found');

        return {
            id: result.id,
            name: result.name,
            metrics: result.metrics, 
            averageAge: result.averageAge || undefined,
            cost: result.cost || undefined,
            percentege: result.percentege || undefined,
            womenPercentage: result.womenPercentage || undefined
        }
    }

    async readAll(): Promise<IIllnessOutput[]> {
        return await prisma.illness.findMany()
    }
}