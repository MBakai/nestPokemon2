
export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev', // Este sí puede tener un default aquí
    mongodb: process.env.MONGODB,
    port: Number(process.env.PORT),
    default_limit: Number(process.env.DEFAULT_LIMIT || 6)
});