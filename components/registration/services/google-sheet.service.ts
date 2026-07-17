import axios from "axios";
import { RegistrationAPIInput, RegistrationResponse } from "../types";

export const googleSheetService = {
  submitRegistration: async (
    data: RegistrationAPIInput
  ): Promise<RegistrationResponse> => {

    const response = await axios.post(
      "/api/register",
      data
    );

    return response.data;
  },
};