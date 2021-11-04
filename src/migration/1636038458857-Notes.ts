import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636038458857 implements MigrationInterface {
    name = 'Notes1636038458857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_2089a3db94ab3397fc7b18290ea"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_2089a3db94ab3397fc7b18290ea"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "seoId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "seoTitle" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "seoDesc" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "seoLink" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "seoLink"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "seoDesc"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "seoTitle"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "seoId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_2089a3db94ab3397fc7b18290ea" UNIQUE ("seoId")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_2089a3db94ab3397fc7b18290ea" FOREIGN KEY ("seoId") REFERENCES "product_seo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
