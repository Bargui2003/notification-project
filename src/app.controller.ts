import { Controller, Get, Post, Body } from '@nestjs/common';
import { FirestoreService } from './firebase/firestore.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Get('collection')
  async getCollection() {
    return this.firestoreService.getCollection('exampleCollection');
  }

  @Post('add')
  async addDocument(@Body() data: any) {
    await this.firestoreService.addDocument('exampleCollection', data);
    return { message: 'Document added successfully' };
  }
}
