import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635517220509 implements MigrationInterface {
    name = 'Notes1635517220509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "desc" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "desc" SET NOT NULL`);
    }

}
