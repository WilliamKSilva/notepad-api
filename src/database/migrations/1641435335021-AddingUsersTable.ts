import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class DeleteNotesTable1641435335021 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notes");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
               {
                   name: "notes",
                   columns: [
                       {
                           name: "id",
                           type: "uuid",
                           isPrimary: true
                       }, 
                       {
                           name: "user_id",
                           type: "uuid"
                       },
                       {
                           name: "name",
                           type: "varchar",
                       },
                       {
                           name: "content",
                           type: "varchar",
                       },
                       {
                           name: "created_at",
                           type: "timestamp",
                           default: "now()"
                       }
                   ]                   
               }
            )
        )
    }    

}
