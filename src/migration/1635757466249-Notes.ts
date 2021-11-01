import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635757466249 implements MigrationInterface {
    name = 'Notes1635757466249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_seo" ("id" SERIAL NOT NULL, "title" character varying, "desc" character varying, "urlHandle" character varying, CONSTRAINT "PK_086e54ae1511ccbdbb761601758" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_e96bca3cd7a592009f2c9dc6f3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_theme" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_9de3f5cdbfffdedb0c230d327f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "variant_options" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "variantId" integer, CONSTRAINT "PK_378f9c60fc48041979a856e7711" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_variants" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_281e3f2c55652d6a22c0aa59fd7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collections" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_21c00b1ebbd41ba1354242c5c4e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6ad7b08e6491a02ebc9ed82019d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "vendor" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "productType" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "availability" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "compareAtPrice" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "costPerItem" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "isTaxed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "product" ADD "trackQuantity" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "product" ADD "sku" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "product" ADD "barcode" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "isPhysical" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "product" ADD "weight" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "unit" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "hasOptions" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "product" ADD "variantsId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "themeId" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD "seoId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_2089a3db94ab3397fc7b18290ea" UNIQUE ("seoId")`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_d11be11255b8eeb5d761023e6bc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "variant_options" ADD CONSTRAINT "FK_0d575dfc2a1f96f58098fd96f80" FOREIGN KEY ("variantId") REFERENCES "product_variants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_57292290461309b61a3db866264" FOREIGN KEY ("variantsId") REFERENCES "product_variants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_4b1bc2f5ace5a3e01f059bb8965" FOREIGN KEY ("themeId") REFERENCES "product_theme"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_2089a3db94ab3397fc7b18290ea" FOREIGN KEY ("seoId") REFERENCES "product_seo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "collections" ADD CONSTRAINT "FK_7b015c8dc6b241471b26d7a2ff0" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" DROP CONSTRAINT "FK_7b015c8dc6b241471b26d7a2ff0"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_2089a3db94ab3397fc7b18290ea"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_4b1bc2f5ace5a3e01f059bb8965"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_57292290461309b61a3db866264"`);
        await queryRunner.query(`ALTER TABLE "variant_options" DROP CONSTRAINT "FK_0d575dfc2a1f96f58098fd96f80"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_d11be11255b8eeb5d761023e6bc"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_2089a3db94ab3397fc7b18290ea"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "seoId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "themeId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "variantsId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "hasOptions"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "unit"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isPhysical"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "barcode"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "sku"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "trackQuantity"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isTaxed"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "costPerItem"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "compareAtPrice"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "availability"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productType"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "vendor"`);
        await queryRunner.query(`DROP TABLE "product_types"`);
        await queryRunner.query(`DROP TABLE "collections"`);
        await queryRunner.query(`DROP TABLE "product_variants"`);
        await queryRunner.query(`DROP TABLE "variant_options"`);
        await queryRunner.query(`DROP TABLE "product_theme"`);
        await queryRunner.query(`DROP TABLE "product_tags"`);
        await queryRunner.query(`DROP TABLE "product_seo"`);
    }

}
