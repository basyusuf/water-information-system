const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || 'water_delivery',
    DB_USERNAME: process.env.DB_USERNAME || 'admin',
    DB_PASSWORD: process.env.DB_PASSWORD || 'pass',
    DB_PORT: Number(process.env.DB_PORT) || 3306
};
export default config;
