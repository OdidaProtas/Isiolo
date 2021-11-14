import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636874816780 implements MigrationInterface {
    name = 'Notes1636874816780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supplier" ADD "storeId" uuid`);
        await queryRunner.query(`ALTER TABLE "supplier" ADD CONSTRAINT "FK_afb338f781eb41a9e3def3e74b7" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supplier" DROP CONSTRAINT "FK_afb338f781eb41a9e3def3e74b7"`);
        await queryRunner.query(`ALTER TABLE "supplier" DROP COLUMN "storeId"`);
    }

}
