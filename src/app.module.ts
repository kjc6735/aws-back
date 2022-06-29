import { Problems } from './problems/entities/problems.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemsModule } from './problems/problems.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV == 'prod' ? '.env' : '.env.dev',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      synchronize: true,
      logging: true,
      entities: [Problems],
    }),
    ProblemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
