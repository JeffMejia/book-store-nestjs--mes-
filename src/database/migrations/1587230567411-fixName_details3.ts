import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetails31587230567411 implements MigrationInterface {
    name = 'fixNameDetails31587230567411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `created_at` `created_at` timestamp NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `status` `status` varchar(8) NOT NULL DEFAULT 'ACTIVE'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `status` `status` varchar(8) NULL DEFAULT 'ACTIVE'", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `created_at` `created_at` timestamp NOT NULL", undefined);
    }

}
