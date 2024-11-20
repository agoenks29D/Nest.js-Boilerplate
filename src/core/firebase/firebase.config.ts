import path from 'node:path';
import { registerAs } from '@nestjs/config';
import firebase from 'firebase-admin';
import { FirebaseConfig } from './firebase.type';

export default registerAs<FirebaseConfig>('firebase', () => {
  const config: FirebaseConfig = {
    credential: firebase.credential.cert(
      path.join(process.cwd(), process.env.FIREBASE_ADMIN_SDK),
    ),
  };

  return config;
});
