import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
