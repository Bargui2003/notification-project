import { Controller, Get, Post, Body } from '@nestjs/common';
import { FirestoreService } from './firebase/firestore.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Get()
  async getNotifications() {
    return this.firestoreService.getNotifications();
  }

  @Post()
  async addNotification(@Body() data: any) {
    await this.firestoreService.addNotification(data);
    return { message: 'Notification added successfully' };
  }
}
