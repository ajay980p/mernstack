import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTenantIdForeignKey1716798733551 implements MigrationInterface {
    name = 'AddTenantIdForeignKey1716798733551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_ea17f1170336ea3bc1f5100adbb\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`tenantIdId\` \`tenantId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_c58f7e88c286e5e3478960a998b\` FOREIGN KEY (\`tenantId\`) REFERENCES \`tenants\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_c58f7e88c286e5e3478960a998b\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`tenantId\` \`tenantIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_ea17f1170336ea3bc1f5100adbb\` FOREIGN KEY (\`tenantIdId\`) REFERENCES \`tenants\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
