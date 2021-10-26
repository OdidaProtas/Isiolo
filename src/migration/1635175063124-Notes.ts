import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635175063124 implements MigrationInterface {
    name = 'Notes1635175063124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "UQ_66df34da7fb037e24fc7fee642b" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "UQ_66df34da7fb037e24fc7fee642b"`);
    }

}
