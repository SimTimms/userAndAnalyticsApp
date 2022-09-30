import { IBrokerStats } from 'interface';

function generateRandomUserName() {
  const names = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'Jacob',
    'Jingleheimer',
    'Schmidt',
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function randomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloorName() {
  const names = [
    'Level 1',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
    'Level 6',
    'Level 7',
    'Level 8',
    'Level 9',
    'Level 10',
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
export function getBrokerStats(): IBrokerStats[] {
  const userArr: IBrokerStats[] = [];

  for (let i = 0; i < 10; i++) {
    userArr.push({
      _id: '',
      name: generateRandomUserName(),
      avgSession: randomNumberBetween(2, 500),
      totalSessions: randomNumberBetween(2, 500),
      plansSent: randomNumberBetween(2, 500),
      mostViewedPlan: randomFloorName(),
      lastActivity: randomDate(
        new Date('2022-01-01'),
        new Date('2022-11-01')
      ).toString(),
    });
  }
  return userArr;
}
