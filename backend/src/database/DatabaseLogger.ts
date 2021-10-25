import { Logger, QueryRunner } from 'typeorm';
export class DatabaseLogger implements Logger {
    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
        console.info('[DATABASE][QUERY] Query:', query, ' Parameters:', parameters, 'QueryRunner:', queryRunner);
    }
    logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner) {
        console.info(
            '[DATABASE][ERROR] Error:',
            error,
            ' Query:',
            query,
            ' Parameters:',
            parameters,
            'QueryRunner:',
            queryRunner,
        );
    }
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
        console.info(
            '[DATABASE][SLOW] Time:',
            time,
            ' Query:',
            query,
            ' Parameters:',
            parameters,
            'QueryRunner:',
            queryRunner,
        );
    }
    logSchemaBuild(message: string, queryRunner?: QueryRunner) {
        console.info('[DATABASE][SCHEMA] Message:', message, 'QueryRunner:', queryRunner);
    }
    logMigration(message: string, queryRunner?: QueryRunner) {
        console.info('[DATABASE][MIGRATION] Message:', message, 'QueryRunner:', queryRunner);
    }
    log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
        if (level === 'warn') {
            console.info(`[DATABASE] Level:[WARNING] Message:${message} QueryRunner:${queryRunner}`);
        }
    }
}
