export type UserRole = 'ADMIN' | 'DRIVER' | 'PARENT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Driver extends User {
  licenseNumber: string;
  vehiclePlate: string;
  vehicleModel: string;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  status: 'OFFLINE' | 'ONLINE' | 'IN_ROUTE';
}

export interface Student {
  id: string;
  name: string;
  parentId: string;
  schoolName: string;
  address: string;
  status: 'PENDING' | 'BOARDED' | 'DROPPED_OFF' | 'ABSENT';
}

export interface Route {
  id: string;
  driverId: string;
  name: string;
  startTime: string;
  status: 'PLANNED' | 'ACTIVE' | 'COMPLETED';
  students: Student[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'INFO' | 'WARNING' | 'SUCCESS';
  timestamp: string;
  read: boolean;
}
