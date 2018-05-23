import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', achievements: ['A1','A2'] },
      { id: 12, name: 'Narco', achievements: ['B1','B2'] },
      { id: 13, name: 'Bombasto', achievements: ['A1','A2'] },
      { id: 14, name: 'Celeritas', achievements: ['A1','A2'] },
      { id: 15, name: 'Magneta', achievements: ['A1','A2'] },
      { id: 16, name: 'RubberMan', achievements: ['A1','A2'] },
      { id: 17, name: 'Dynama', achievements: ['A1','A2'] },
      { id: 18, name: 'Dr IQ', achievements: ['A1','A2'] },
      { id: 19, name: 'Magma', achievements: ['A1','A2'] },
      { id: 20, name: 'Tornado', achievements: ['A1','A2'] }
    ];
    return { heroes };
  }
}
