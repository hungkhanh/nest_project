import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Entity, EntityRepository, Repository } from "typeorm";
import { CreateQuizDto } from "./quiz.dto";
import { Quiz } from "./quiz.entity";

@Injectable()
export class QuizRepository {
  constructor(@InjectRepository(Quiz) private readonly repository: Repository<Quiz>) {}

  async create(quizData: CreateQuizDto): Promise<Quiz> {
    const quiz = new Quiz();
    quiz.title = quizData.title;
    quiz.description = quizData.description;

    await this.repository.save(quiz);

    return quiz;
  }
}