export interface IJWTPayload {
    name: string
}

export interface IJWTRepository {
    generate(payload: IJWTPayload): string;
    verify(key: string): IJWTPayload;
}