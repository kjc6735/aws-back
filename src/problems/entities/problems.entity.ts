import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Problems {
  setAll({ problem_ko, problem_en, answer }) {
    this.problem_ko = problem_ko;
    this.problem_en = problem_en;
    this.answer = answer;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  problem_ko: string;

  @Column('text')
  problem_en: string;

  @Column('text')
  answer: string;
}
