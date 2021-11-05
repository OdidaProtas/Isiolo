import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636093725029 implements MigrationInterface {
    name = 'Notes1636093725029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_variants" DROP CONSTRAINT "FK_f515690c571a03400a9876600b5"`);
        await queryRunner.query(`ALTER TABLE "product_variants" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "options" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "options"`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD CONSTRAINT "FK_f515690c571a03400a9876600b5" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
