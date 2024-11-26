import { Injectable } from '@nestjs/common';
import { firestore } from '../config/firebase.config';

@Injectable()
export class FirestoreService {
  private db = firestore;

  async getNotifications(): Promise<any[]> {
    const snapshot = await this.db.collection('notifications').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async addNotification(data: any): Promise<void> {
    await this.db.collection('notifications').add(data);
  }
}
