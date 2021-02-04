export type Token = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  expires_at: number;
};

export type UserMetadata = {
  full_name: string;
};

export type User = {
  id: string;
  email: string;
  token: Token;
  confirmed_at: string;
  confirmation_sent_at: string;
  created_at: string;
  updated_at: string;
  user_metadata: UserMetadata;
};

export type IdentityState = {
  loggedIn: boolean;
  user?: User;
};

export type Identity = {
  state: IdentityState;
  login: () => void;
  logout: () => void;
  closeModal: () => void;
};
