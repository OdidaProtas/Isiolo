import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635757983682 implements MigrationInterface {
    name = 'Notes1635757983682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_media" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_09d4639de8082a32aa27f3ac9a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_media" ADD CONSTRAINT "FK_50e3945c6150d80b69b5f18515a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_media" DROP CONSTRAINT "FK_50e3945c6150d80b69b5f18515a"`);
        await queryRunner.query(`DROP TABLE "product_media"`);
    }

}
