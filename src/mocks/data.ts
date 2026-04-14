import { Driver, Student, Route, Message, Notification } from '../types';

export const MOCK_DRIVERS: Driver[] = [
  {
    id: 'd1',
    name: 'Roberto Silva',
    email: 'roberto@escolargo.com',
    role: 'DRIVER',
    licenseNumber: '123456789',
    vehiclePlate: 'ABC-1234',
    vehicleModel: 'Mercedes Sprinter Branca',
    status: 'IN_ROUTE',
    currentLocation: { lat: -23.5505, lng: -46.6333 },
    avatar: 'https://i.pravatar.cc/150?u=d1'
  }
];

export const MOCK_STUDENTS: Student[] = [
  {
    id: 's1',
    name: 'Lucas Oliveira',
    parentId: 'p1',
    schoolName: 'Colégio Bandeirantes',
    address: 'Rua das Flores, 123',
    status: 'BOARDED'
  },
  {
    id: 's2',
    name: 'Ana Clara',
    parentId: 'p1',
    schoolName: 'Colégio Bandeirantes',
    address: 'Av. Paulista, 1000',
    status: 'PENDING'
  },
  {
    id: 's3',
    name: 'Pedro Santos',
    parentId: 'p2',
    schoolName: 'Escola Americana',
    address: 'Rua Augusta, 500',
    status: 'PENDING'
  }
];

export const MOCK_ROUTES: Route[] = [
  {
    id: 'r1',
    driverId: 'd1',
    name: 'Rota Manhã - Zona Sul',
    startTime: '07:00',
    status: 'ACTIVE',
    students: MOCK_STUDENTS
  }
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'm1',
    senderId: 'd1',
    receiverId: 'p1',
    content: 'Estou chegando em 5 minutos!',
    timestamp: new Date().toISOString()
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    userId: 'p1',
    title: 'Transporte Chegando',
    message: 'O motorista Roberto está a 2km de distância.',
    type: 'INFO',
    timestamp: new Date().toISOString(),
    read: false
  }
];
