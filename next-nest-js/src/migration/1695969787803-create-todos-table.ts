import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTodosTable1695969787803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        create table today (
            id bigserial primary key,
            name text,
            completed boolean not null default false
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table todos;`)
    }

}
