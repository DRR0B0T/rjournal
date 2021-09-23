import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';
import { SearchPostDto } from './dto/search-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async popular() {
    const qb = this.repository.createQueryBuilder('p');

    qb.orderBy('views', 'DESC'); //сортировка по популярности
    qb.limit(10);

    const [items, total] = await qb.getManyAndCount();

    return {
      items,
      total,
    };
  }

  search(dto: SearchPostDto) {
    const qb = this.repository.createQueryBuilder('p');

    qb.limit(dto.limit || 0);
    qb.take(dto.limit || 10);

    if (dto.views) {
      qb.orderBy('views', dto.views);
    }

    if (dto.body) {
      qb.where(`p.body ILIKE %${dto.body}%`);
    }

    if (dto.body) {
      qb.where(`p.body ILIKE %${dto.body}%`);
    }
  }

  async findOne(id: number) {
    const find = await this.repository.findOne(+id);
    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    return find;
  }

  async update(id: number, dto: UpdatePostDto) {
    const find = await this.repository.findOne(+id);
    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    const find = await this.repository.findOne(+id);
    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    return this.repository.delete(id);
  }
}
