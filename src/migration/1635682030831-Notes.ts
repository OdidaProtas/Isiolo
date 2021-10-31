import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635682030831 implements MigrationInterface {
    name = 'Notes1635682030831'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."product_status_enum" AS ENUM('draft', 'active', 'archived')`);
        await queryRunner.query(`ALTER TABLE "product" ADD "status" "public"."product_status_enum" NOT NULL DEFAULT 'draft'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."product_status_enum"`);
    }

}
