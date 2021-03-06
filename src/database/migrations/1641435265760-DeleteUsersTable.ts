import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class DeleteUsersTable1641435265760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table(
                {
                    name: "users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                         name: "name",
                         type: "varchar",
                        },
                        {
                         name: "email",
                         type: "varchar",
                        }, 
                        {
                            name: "username",
                            type: "varchar",
                            isUnique: true,
                        },
                        {
                            name: "password",
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
