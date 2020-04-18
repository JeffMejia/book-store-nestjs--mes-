import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetails1587229572205 implements MigrationInterface {
    name = 'fixNameDetails1587229572205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `name` `name` varchar(50) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `lastname` `lastname` varchar(50) NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `updated_at` `updated_at` timestamp NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `status` `status` varchar(8) NULL DEFAULT 'ACTIVE'", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `status` `status` varchar(8) NOT NULL DEFAULT 'ACTIVE'", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `updated_at` `updated_at` timestamp NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `lastname` `lastname` varchar(50) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user_details` CHANGE `name` `name` varchar(50) NOT NULL", undefined);
    }

}
