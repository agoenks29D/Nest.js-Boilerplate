import { registerAs } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export default registerAs<MongooseModuleOptions>('database', () => {
  const config: MongooseModuleOptions = {
    uri: process.env.DB_URI,
  };

  return config;
});
