export interface InitialState {
  token: string;
  user?: User;
}

interface User {
  _id: string;
  email: string;
  isActive: boolean;
  name: string;
  lastName: string;
  roles: string[];
  company: string;
  profileImage: string;
  position: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
