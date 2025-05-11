//Definir estados de autenticación

export interface User {
  name: string;
  lastname: string;
  email: string;
  photoUrl: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export type AuthStatus = "authenticated" | "not-authenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  user: User | null;
  token: string | null;
}