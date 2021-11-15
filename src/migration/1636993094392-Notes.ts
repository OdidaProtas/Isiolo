import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636993094392 implements MigrationInterface {
    name = 'Notes1636993094392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "company" character varying, "address" character varying, "apartment" character varying, "region" character varying, "city" character varying, "note" character varying, "storeId" uuid, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "FK_3f2ee6ff7277ed1eb0d07d503a7" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "FK_3f2ee6ff7277ed1eb0d07d503a7"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
