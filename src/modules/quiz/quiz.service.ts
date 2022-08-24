import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './quiz.dto';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepository: QuizRepository,) {}

  async createQuiz(quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizRepository.create(quizData);
  }
}
