declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PROT: string;
            ACCESS_TOKEN_SECRET: string;
            DB_USER: string;
            DB_PASSWORD: string;
            DB_CLUSTER: string;
        }
    }
}
export { };