import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636872123101 implements MigrationInterface {
    name = 'Notes1636872123101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "supplier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying, "apartment" character varying, "city" character varying, "country" character varying, "postalCode" character varying, "contactName" character varying, "email" character varying, "phone" character varying, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "supplier"`);
    }

}
