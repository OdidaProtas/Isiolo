import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636988801597 implements MigrationInterface {
    name = 'Notes1636988801597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gift_card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "desc" character varying, "seoTitle" character varying, "seoDesc" character varying, "seoLink" boolean, "status" character varying NOT NULL DEFAULT 'draft', "vendor" character varying, "productType" character varying, "storeId" uuid, CONSTRAINT "PK_af4e338d2d41035042843ad641f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "gift_card" ADD CONSTRAINT "FK_8963e1f7e3b8773d17c6c0eb9bc" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gift_card" DROP CONSTRAINT "FK_8963e1f7e3b8773d17c6c0eb9bc"`);
        await queryRunner.query(`DROP TABLE "gift_card"`);
    }

}
