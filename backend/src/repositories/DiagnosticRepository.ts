import { PrismaClient } from "@prisma/client";
import { IDiagnostics } from "../interfaces/IDiagnostics";
import { IDiagnosticsRepository } from "../interfaces/IDiagnosticsRepository";

let prisma = new PrismaClient();
export class DiagnosticRepository implements IDiagnosticsRepository {
    async get(input: string): Promise<IDiagnostics> {
        let id = input;
        let result = await prisma.diagnostics.findUnique({
            where: { id }
        });

        if(!result) throw new Error('Diagnostic not found');
        return result;
    }

    async getAll(): Promise<IDiagnostics[]> {
        return await prisma.diagnostics.findMany();
    }

    async insert(input: IDiagnostics): Promise<void> {
        await prisma.diagnostics.create({
            data: input
        })
    }

    async update(input: IDiagnostics): Promise<void> {
        let id = input.id;
        await prisma.diagnostics.update({
            where: { id },
            data: input
        })
    }
}