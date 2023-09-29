import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("todo")
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ default: false })
    completed: boolean
}