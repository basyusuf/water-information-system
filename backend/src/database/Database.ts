import { join } from 'path';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { DatabaseLogger } from './DatabaseLogger';
import config from '../config';

export class Database {
    public static connection: Connection;
    private constructor() {
        console.log('Created database connection!');
    }
    public static async getInstance(): Promise<Connection> {
        if (!this.connection) {
            console.info('Creating database connection...');
            console.info('Warning!  Please change synchronize to false on Production');
            try {
                const connectionOptions: ConnectionOptions = {
                    name: 'default',
                    type: 'mysql',
                    port: config.DB_PORT,
                    synchronize: true,
                    host: config.DB_HOST,
                    database: config.DB_NAME,
                    username: config.DB_USERNAME,
                    password: config.DB_PASSWORD,
                    logging: false,
                    entities: [join(__dirname, '/entities/**/**.entity{.ts,.js}')],
                };
                console.info('Connection options:', connectionOptions);
                let connection: Connection = await createConnection(connectionOptions);
                this.connection = connection;
            } catch (err) {
                console.info('Connection Error! Detail:', err);
                throw new Error('Database connection error. Please check logs');
            }
        }
        return this.connection;
    }
}
