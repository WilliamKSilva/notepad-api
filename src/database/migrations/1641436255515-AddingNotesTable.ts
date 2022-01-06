import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddingNotesTable1641436255515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
                        type: "uuid",                        
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
                ],
                   foreignKeys: [
                       {
                           name: "FKUserId",
                           referencedTableName: "users",
                           referencedColumnNames: ["id"],
                           columnNames: ["user_id"],
                           onDelete: "SET NULL",
                           onUpdate: "SET NULL",
                       }
                   ]
               }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
