import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseServiceService } from './firebase-service.service';

describe('FirebaseServiceService', () => {
  let service: FirebaseServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirebaseServiceService],
    }).compile();

    service = module.get<FirebaseServiceService>(FirebaseServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
