const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || 'water_information_system',
    DB_USERNAME: process.env.DB_USERNAME || 'admin',
    DB_PASSWORD: process.env.DB_PASSWORD || 'admin',
    DB_PORT: 3306,
    SERVER_PORT: 3001
};
export default config;
