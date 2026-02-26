import { Role } from "./common";

export interface TSignUp {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
  password: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  nationality: string;
  address: string;
  nationalIdNumber: string;
  dateOfBirth: string;
  role?: string;
}

export interface TLogin {
  email: string;
  password: string;
}
export interface TUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: null;
  city?: string;
  role: Role;
  isAccountVerified?: boolean;
  createdAt?: string;
  passwordHashed?: string;
  isDeleted?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fcmTokens?: any[];
}
export interface TAccessToken {
  accessToken: string;
}

export interface OTPResponse {
  id: string;
  expiresAt: string;
  code: string;
}
