export interface IUserSecurity {
    password: string;
    isVerified: boolean;
    emailToken: string | null;
    isActive: boolean;
  }
  