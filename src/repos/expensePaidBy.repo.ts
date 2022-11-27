import { Column, PrimaryColumn,OneToOne,JoinTable, Entity } from "typeorm"
import { Expense } from "./expenses.repo"
import { User } from "./users.repo"

@Entity({name: "expense_paid_by"})
export class EcpensePaidBy{
    @PrimaryColumn()
    expenseId: number
    @PrimaryColumn()
    userId: number
    @Column()
    amount: number

    @OneToOne(() => User)
    @JoinTable()
    user: User

    @OneToOne(() => Expense)
    @JoinTable()
    expense: Expense
}