import { QueryRunner } from "typeorm";
import { AppDataSource } from "../config/data-source";


 const transaccionRun = async <T>(operation: (queryRunner: QueryRunner) => Promise<T>): Promise<T> => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
        const result = await operation(queryRunner);
        await queryRunner.commitTransaction();
        return result;
    } catch (error) {
        console.error("Error en la transaccionRun", error);
        await queryRunner.rollbackTransaction();
        throw error;
    } finally {
        await queryRunner.release();
    }
}


export default transaccionRun;