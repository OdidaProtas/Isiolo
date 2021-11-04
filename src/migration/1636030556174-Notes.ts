import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636030556174 implements MigrationInterface {
    name = 'Notes1636030556174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_57292290461309b61a3db866264"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "variantsId"`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD CONSTRAINT "FK_f515690c571a03400a9876600b5" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_variants" DROP CONSTRAINT "FK_f515690c571a03400a9876600b5"`);
        await queryRunner.query(`ALTER TABLE "product_variants" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "variantsId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_57292290461309b61a3db866264" FOREIGN KEY ("variantsId") REFERENCES "product_variants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
