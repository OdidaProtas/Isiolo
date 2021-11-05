import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1636091351587 implements MigrationInterface {
    name = 'Notes1636091351587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_media" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_09d4639de8082a32aa27f3ac9a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_e96bca3cd7a592009f2c9dc6f3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_theme" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_9de3f5cdbfffdedb0c230d327f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "variant_options" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "variantId" integer, CONSTRAINT "PK_378f9c60fc48041979a856e7711" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_variants" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_281e3f2c55652d6a22c0aa59fd7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "store_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "industry" character varying NOT NULL, "subCounty" character varying NOT NULL, "county" character varying NOT NULL, "address" character varying NOT NULL, "apartment" character varying, "phoneNumber" character varying NOT NULL, CONSTRAINT "PK_df72f268e81e51924992bf6ecc1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "store" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created" TIMESTAMP WITH TIME ZONE, "profileId" uuid, "ownerId" uuid, CONSTRAINT "UQ_66df34da7fb037e24fc7fee642b" UNIQUE ("name"), CONSTRAINT "REL_2e48e0beac85f0470e26f0defc" UNIQUE ("profileId"), CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."product_status_enum" AS ENUM('draft', 'active', 'archived')`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "desc" character varying, "status" "public"."product_status_enum" NOT NULL DEFAULT 'draft', "vendor" character varying, "productType" character varying, "availability" character varying, "price" character varying, "compareAtPrice" character varying, "costPerItem" character varying, "isTaxed" boolean NOT NULL DEFAULT false, "trackQuantity" boolean NOT NULL DEFAULT false, "quantity" integer NOT NULL DEFAULT '0', "sellOutOfStock" boolean NOT NULL DEFAULT false, "sku" integer NOT NULL DEFAULT '0', "barcode" character varying, "isPhysical" boolean NOT NULL DEFAULT false, "weight" character varying, "unit" character varying, "hasOptions" boolean NOT NULL DEFAULT false, "seoTitle" character varying, "seoDesc" character varying, "seoLink" character varying, "storeId" uuid, "themeId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collections" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_21c00b1ebbd41ba1354242c5c4e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_seo" ("id" SERIAL NOT NULL, "title" character varying, "desc" character varying, "urlHandle" character varying, CONSTRAINT "PK_086e54ae1511ccbdbb761601758" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6ad7b08e6491a02ebc9ed82019d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_media" ADD CONSTRAINT "FK_50e3945c6150d80b69b5f18515a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_d11be11255b8eeb5d761023e6bc" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "variant_options" ADD CONSTRAINT "FK_0d575dfc2a1f96f58098fd96f80" FOREIGN KEY ("variantId") REFERENCES "product_variants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD CONSTRAINT "FK_f515690c571a03400a9876600b5" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_2e48e0beac85f0470e26f0defc9" FOREIGN KEY ("profileId") REFERENCES "store_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_a83068090fe4511e5047484b09a" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_32eaa54ad96b26459158464379a" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_4b1bc2f5ace5a3e01f059bb8965" FOREIGN KEY ("themeId") REFERENCES "product_theme"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "collections" ADD CONSTRAINT "FK_7b015c8dc6b241471b26d7a2ff0" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" DROP CONSTRAINT "FK_7b015c8dc6b241471b26d7a2ff0"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_4b1bc2f5ace5a3e01f059bb8965"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_32eaa54ad96b26459158464379a"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_a83068090fe4511e5047484b09a"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_2e48e0beac85f0470e26f0defc9"`);
        await queryRunner.query(`ALTER TABLE "product_variants" DROP CONSTRAINT "FK_f515690c571a03400a9876600b5"`);
        await queryRunner.query(`ALTER TABLE "variant_options" DROP CONSTRAINT "FK_0d575dfc2a1f96f58098fd96f80"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_d11be11255b8eeb5d761023e6bc"`);
        await queryRunner.query(`ALTER TABLE "product_media" DROP CONSTRAINT "FK_50e3945c6150d80b69b5f18515a"`);
        await queryRunner.query(`DROP TABLE "product_types"`);
        await queryRunner.query(`DROP TABLE "product_seo"`);
        await queryRunner.query(`DROP TABLE "collections"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TYPE "public"."product_status_enum"`);
        await queryRunner.query(`DROP TABLE "store"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "store_profile"`);
        await queryRunner.query(`DROP TABLE "product_variants"`);
        await queryRunner.query(`DROP TABLE "variant_options"`);
        await queryRunner.query(`DROP TABLE "product_theme"`);
        await queryRunner.query(`DROP TABLE "product_tags"`);
        await queryRunner.query(`DROP TABLE "product_media"`);
    }

}
