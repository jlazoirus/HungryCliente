import {Entity, ObjectIdColumn, ObjectID, Column, BaseEntity} from "typeorm";
import { Dish } from './Dish';

@Entity()
export class Restaurant extends BaseEntity {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column("simple-array")
    images: string[];

    @Column(type => Dish)
    dishes: Dish[];

}
