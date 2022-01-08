import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity("notes")
class Note {
    @PrimaryColumn()
    id?: string;  
    
    @Column()
    user_id: string;    

    @Column()
    name: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;    

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Note };