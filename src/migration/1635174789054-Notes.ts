import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635174789054 implements MigrationInterface {
    name = 'Notes1635174789054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "created" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" ALTER COLUMN "created" SET NOT NULL`);
    }

}
