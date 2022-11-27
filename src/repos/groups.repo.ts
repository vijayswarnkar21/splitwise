import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Expense } from "./expenses.repo"
import { User } from "./users.repo"

@Entity()
export class Group{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany(() => User, user => user.groups)
    @JoinTable()
    members: User[]

    @OneToMany(() => Expense, expenses => expenses)
    expenses: Expense[]

}