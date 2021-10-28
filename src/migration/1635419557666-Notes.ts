import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1635419557666 implements MigrationInterface {
    name = 'Notes1635419557666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "store_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "industry" character varying NOT NULL, "subCounty" character varying NOT NULL, "county" character varying NOT NULL, "address" character varying NOT NULL, "apartment" character varying, "phoneNumber" character varying NOT NULL, CONSTRAINT "PK_df72f268e81e51924992bf6ecc1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "store" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created" TIMESTAMP WITH TIME ZONE, "profileId" uuid, "ownerId" uuid, CONSTRAINT "UQ_66df34da7fb037e24fc7fee642b" UNIQUE ("name"), CONSTRAINT "REL_2e48e0beac85f0470e26f0defc" UNIQUE ("profileId"), CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_2e48e0beac85f0470e26f0defc9" FOREIGN KEY ("profileId") REFERENCES "store_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_a83068090fe4511e5047484b09a" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_a83068090fe4511e5047484b09a"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_2e48e0beac85f0470e26f0defc9"`);
        await queryRunner.query(`DROP TABLE "store"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "store_profile"`);
    }

}
