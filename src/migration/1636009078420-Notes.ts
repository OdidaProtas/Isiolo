import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636009078420 implements MigrationInterface {
    name = 'Notes1636009078420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "sellOutOfStock" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "sellOutOfStock"`);
    }

}
