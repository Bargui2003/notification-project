import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from 'nestjs-firebase';
import { FirebaseServiceService } from './firebase-service/firebase-service.service';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [FirebaseModule.forRoot({
    googleApplicationCredential: "path/to/credential file.json",
  }), FirebaseModule,],
  controllers: [AppController],
  providers: [AppService, FirebaseServiceService],
})
export class AppModule {}
