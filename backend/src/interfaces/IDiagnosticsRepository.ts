import { IDiagnostics } from "./IDiagnostics";

export interface IDiagnosticsRepository {
  insert(input: IDiagnostics): Promise<void>;
  get(input: string): Promise<IDiagnostics>;
  getAll(): Promise<IDiagnostics[]>;
  update(input: IDiagnostics): Promise<void>
}