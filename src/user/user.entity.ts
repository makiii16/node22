import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../post/post.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @OneToMany(()=>Post,(post)=>post.user)
    posts: Post[];
}