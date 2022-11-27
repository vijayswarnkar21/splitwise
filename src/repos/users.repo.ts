import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Expense } from "./expenses.repo"
import { Group } from "./groups.repo"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string 

    @ManyToMany(() => Group, group => group.members)
    groups: Group[]
}