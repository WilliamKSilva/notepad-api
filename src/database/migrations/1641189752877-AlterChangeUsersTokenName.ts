import {Column, MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class AddingUserIdColumn1641189752877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_token")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table(
                {
                    name: "user_token",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                        name: "refresh_token",
                        type: "varchar",
                        },
                        {
                        name: "user_id",
                        type: "uuid",
                        }, 
                        {
                            name: "expires_date",
                            type: "timestamp",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        },                         
                    ],
                    foreignKeys: [
                        {
                            name: "FKUserToken",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["user_id"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        }
                    ]
                }
            )
        )
            
    }

}
