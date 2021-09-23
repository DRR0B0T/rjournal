import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { PostEntity } from '../../post/entities/post.entity';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => UserEntity, {
    nullable: false,
  }) //каждый пользователь сможет оставлять несколько комментов
  @JoinColumn({ name: 'userId' }) // в таблице будет использоваться число userId
  user: UserEntity;

  @ManyToOne(() => PostEntity, {
    nullable: false,
  }) //комментарий может быть конкретного пользователя и в конкретной записи
  @JoinColumn({ name: 'postId' }) // в таблице будет использоваться число postId
  post: PostEntity; //получаем объект

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
