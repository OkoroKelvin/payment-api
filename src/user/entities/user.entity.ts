import { Column, Entity } from "typeorm";
import { Exclude } from 'class-transformer';

@Entity()
export class User{

    id?: number;

    @Column({ length: 199 })
    full_name: string;

    @Column({ unique: true, length: 199 })
    email: string;

    @Column({ length: 199 })
    @Exclude()
    password: string;

    
    phonenumber: string;

}