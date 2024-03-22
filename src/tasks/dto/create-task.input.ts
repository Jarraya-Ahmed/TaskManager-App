import { Field, InputType } from "@nestjs/graphql"
@InputType()
export class CreataTaskInput {

@Field()
title:string;

@Field({nullable: true})
description?:string;


}