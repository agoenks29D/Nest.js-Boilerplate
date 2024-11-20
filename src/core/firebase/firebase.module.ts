import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import firebase from 'firebase-admin';
import { AllConfigType } from '@/app.type';
import firebaseConfig from './firebase.config';

@Module({
  imports: [ConfigModule.forFeature(firebaseConfig)],
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useFactory: (configService: ConfigService<AllConfigType>) => {
        const config = configService.get('firebase');
        const app = firebase.initializeApp(config);
        return app;
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseModule {}
