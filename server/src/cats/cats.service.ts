import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{ age: 10, breed: 'orange', name: 'Cat1' }];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
