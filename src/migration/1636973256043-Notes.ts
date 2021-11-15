import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636973256043 implements MigrationInterface {
    name = 'Notes1636973256043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transfer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "destination" character varying, "arrival" character varying, "trackingNumber" character varying, "url" character varying, "ref" character varying, "supplierId" uuid, "storeId" uuid, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "storeId" uuid, CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transfer_products_product" ("transferId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_49b41a7a1986ca5ec4de30eb694" PRIMARY KEY ("transferId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0ce90b1a121348fea5aaf16271" ON "transfer_products_product" ("transferId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e27df830e2b63268f00687ee15" ON "transfer_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_a075c3a9b9e468087fcbe800efd" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_f190d68f088006ed915370ebf6c" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_26e5399e996c79e5c7d169e80bc" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transfer_products_product" ADD CONSTRAINT "FK_0ce90b1a121348fea5aaf162715" FOREIGN KEY ("transferId") REFERENCES "transfer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "transfer_products_product" ADD CONSTRAINT "FK_e27df830e2b63268f00687ee15a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transfer_products_product" DROP CONSTRAINT "FK_e27df830e2b63268f00687ee15a"`);
        await queryRunner.query(`ALTER TABLE "transfer_products_product" DROP CONSTRAINT "FK_0ce90b1a121348fea5aaf162715"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_26e5399e996c79e5c7d169e80bc"`);
        await queryRunner.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_f190d68f088006ed915370ebf6c"`);
        await queryRunner.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_a075c3a9b9e468087fcbe800efd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e27df830e2b63268f00687ee15"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0ce90b1a121348fea5aaf16271"`);
        await queryRunner.query(`DROP TABLE "transfer_products_product"`);
        await queryRunner.query(`DROP TABLE "vendor"`);
        await queryRunner.query(`DROP TABLE "transfer"`);
    }

}
