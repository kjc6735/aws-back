import { Problems } from './entities/problems.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { data as d } from './data';
@Injectable()
export class ProblemsService {
  constructor(
    @InjectRepository(Problems) private readonly problems: Repository<Problems>,
  ) {}
  async findOne(id: number) {
    try {
      const problem = await this.problems.findOne({
        where: {
          id,
        },
      });
      if (!problem) return { ok: false, error: '문제를 찾을 수 없습니다.' };
      return {
        ok: true,
        data: problem,
      };
    } catch (e) {
      throw new Error('에러가 발생했습니다...');
    }
  }

  async insert() {
    const data = d;
    try {
      data.map(async (item) => {
        const newProblem = new Problems();
        const problem = {
          problem_ko: item[0],
          problem_en: item[1],
          answer: item[2],
        };
        newProblem.setAll(problem);
        await this.problems.save(newProblem);
      });
      return {
        ok: true,
        message: '저장에 성공했습니다.',
      };
    } catch (e) {
      return {
        ok: false,
        error: '저장 실패',
      };
    }
  }

  getProblemNumbers() {
    return this.problems.find({ select: ['id'] });
  }
}
