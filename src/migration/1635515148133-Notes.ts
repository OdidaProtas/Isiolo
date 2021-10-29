import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635515148133 implements MigrationInterface {
    name = 'Notes1635515148133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "desc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "storeId" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_32eaa54ad96b26459158464379a" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_32eaa54ad96b26459158464379a"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "storeId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "desc"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" character varying NOT NULL`);
    }

}
