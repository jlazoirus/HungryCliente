import {Entity, ObjectIdColumn, ObjectID, Column, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    firstName: string;
}
