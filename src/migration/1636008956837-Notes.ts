import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636008956837 implements MigrationInterface {
    name = 'Notes1636008956837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "quantity" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "quantity"`);
    }

}
