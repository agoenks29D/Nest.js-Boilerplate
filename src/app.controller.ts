import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './core/database/test.schema';
import { AppService } from './app.service';
import { CreateTestDto, UpdateTestDto } from './app.dto';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    @InjectModel(Test.name) private testModel: Model<Test>,
  ) {}

  @Get()
  async serverInfo() {
    const serverInfo = await this.appService.getServerInfo();
    return serverInfo;
  }

  @Post('db-tests')
  async addData(@Body() { name, value }: CreateTestDto) {
    const newData = await this.testModel.create({ name, value });
    return newData;
  }

  @Get('db-tests')
  async getData() {
    const listData = await this.testModel.find().exec();
    return listData;
  }

  @Get('db-tests/:id')
  async getDetail(@Param('id') id: string) {
    const find = await this.testModel.findById(id);
    return find;
  }

  @Patch('db-tests/:id')
  async updateData(
    @Param('id') id: string,
    @Body() { name, value }: UpdateTestDto,
  ) {
    const findData = await this.testModel.findById(id);

    if (!findData) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }

    findData.name = name ?? findData.name;
    findData.value = value ?? findData.value;

    await findData.save();

    return findData;
  }

  @Delete('db-tests/:id')
  async deleteData(@Param('id') id: string) {
    const findData = await this.testModel.findById(id);

    if (!findData) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }

    await findData.deleteOne();
    return findData;
  }
}
