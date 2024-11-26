import { Injectable } from '@nestjs/common';
import { firestore } from '../config/firebase.config';

@Injectable()
export class FirestoreService {
  private db = firestore;

  async getCollection(collectionName: string): Promise<any[]> {
    const snapshot = await this.db.collection(collectionName).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async addDocument(collectionName: string, data: any): Promise<void> {
    await this.db.collection(collectionName).add(data);
  }
}
