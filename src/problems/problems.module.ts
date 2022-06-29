import { Problems } from './entities/problems.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';

@Module({
  imports: [TypeOrmModule.forFeature([Problems])],
  controllers: [ProblemsController],
  providers: [ProblemsService],
  exports: [],
})
export class ProblemsModule {}
