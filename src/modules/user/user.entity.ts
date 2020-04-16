import { UserDetails } from './users.details.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { Role } from '../role/role.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @OneToOne(type => UserDetails, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'detail_id' })
  details: UserDetails;

  @ManyToMany(
    type => Role,
    role => role.user,
  )
  @JoinColumn({ name: 'user_roles' })
  roles: Role[];
}
