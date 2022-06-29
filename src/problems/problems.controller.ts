import { ProblemsService } from './problems.service';
import { Controller, Get, Inject, Param, Res } from '@nestjs/common';

@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}
  @Get(':id')
  findOne(@Param('id') id) {
    return this.problemsService.findOne(id);
  }

  @Get()
  getNumberList() {
    return this.problemsService.getProblemNumbers();
  }
}
