export interface IPopup {
  register: boolean;
  auth: boolean;
}

export interface IUserData {
  email: string | null | undefined;
  password: string | null | undefined;
  password2: string | null | undefined;
  phone: string | null | undefined;
  first_name: string | null | undefined;
}
