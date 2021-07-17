import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
	id: number;

  @Column('varchar', {
    name: 'home_team',
    nullable: true,
  })
  homeTeam: string;

  @Column('varchar')
  name: string;

  @Column('int')
  age: number;

  @Column('double precision')
  height: number;

  @Column('timestamptz')
	createdAt: Date;

  @Column('timestamptz', {
    nullable: true,
  })
	updatedAt: Date;
}