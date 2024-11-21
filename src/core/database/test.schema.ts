import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
