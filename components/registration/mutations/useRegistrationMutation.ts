import { useMutation } from '@tanstack/react-query';
import { googleSheetService } from '../services/google-sheet.service';
import { RegistrationAPIInput, RegistrationResponse } from '../types';

export function useRegistrationMutation() {
  return useMutation<RegistrationResponse, Error, RegistrationAPIInput>({
    mutationFn: (data) => googleSheetService.submitRegistration(data),
  });
}
