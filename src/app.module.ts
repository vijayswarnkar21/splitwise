import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config  from './configs/ormConfig'
import { User } from './repos/users.repo';
import { Group } from './repos/groups.repo';
import { Expense } from './repos/expenses.repo';
import { EcpensePaidBy } from './repos/expensePaidBy.repo';

@Module({
  imports: [TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Group, Expense, EcpensePaidBy])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
