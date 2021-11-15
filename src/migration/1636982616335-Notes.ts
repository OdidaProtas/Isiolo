import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636982616335 implements MigrationInterface {
    name = 'Notes1636982616335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "desc" character varying`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "seoTitle" character varying`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "seoLink" character varying`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "seoDesc" character varying`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "availability" character varying`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "storeId" uuid`);
        await queryRunner.query(`ALTER TABLE "collections" ADD CONSTRAINT "FK_068a0507b0e0fc23b06fcffd3f5" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" DROP CONSTRAINT "FK_068a0507b0e0fc23b06fcffd3f5"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "storeId"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "availability"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "seoDesc"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "seoLink"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "seoTitle"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "desc"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "name" character varying NOT NULL`);
    }

}
