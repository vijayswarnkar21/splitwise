import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Group } from "./groups.repo"
import { User } from "./users.repo"

@Entity()
export class Expense{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    amount: number

    @ManyToMany(() => User)
    @JoinTable({name: "expense_paid_by", })
    paidBy: User[]

    @ManyToMany(() => User)
    @JoinTable({name: "expense_owed_by", })
    owedBy: User[]

    @ManyToOne(() => Group, group => group.expenses)
    @JoinColumn()
    group: Group
}