import { RegistrationFormInput, RegistrationAPIInput } from '../schemas/registration.schema';

export type { RegistrationFormInput, RegistrationAPIInput };

export interface RegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
}
