import { Injectable } from '@nestjs/common';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { firestore } from '../config/firebase.config';

@Injectable()
export class FirestoreService {
  async getNotifications(): Promise<any[]> {
    const snapshot = await getDocs(collection(firestore, 'notifications'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async addNotification(data: any): Promise<void> {
    await addDoc(collection(firestore, 'notifications'), data);
  }
}
