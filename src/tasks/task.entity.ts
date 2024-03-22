import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


//this decorater is  used to save the class inside the database not only not only  object type in the graphql schema
@Entity()
@ObjectType()
export class Task {
     @Field(type=>Int)
     @PrimaryGeneratedColumn()
     id: number
     @Field()
     @Column()
     title: string
     @Column({nullable: true})
     @Field({nullable: true})
     description:string

     dueDate: Date
     
     status:string

}