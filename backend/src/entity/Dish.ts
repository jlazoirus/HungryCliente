import {Entity, ObjectIdColumn, ObjectID, Column, BaseEntity} from "typeorm";

export const DeliveryTypes = {
    para_llevar: 'Para Llevar',
    reservar: 'Reservar',
    delivery: 'Delivery'
}

@Entity()
export class Dish extends BaseEntity {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    price: string;

    @Column("simple-array")
    ingredients: string[];

    @Column("simple-array")
    deliveryType: string[]; // 'Para Llevar , Reservar , Delivery'
}
