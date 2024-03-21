import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Task {
     @Field(type=>Int)
     id: number
     @Field()
     title: string
     @Field({nullable: true})
     description:string

     dueDate: Date
     
     status:string

}