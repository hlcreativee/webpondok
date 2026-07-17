import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nama lengkap minimal 3 karakter." }),

  gender: z.enum(["male", "female"], {
    message: "Pilih jenis kelamin.",
  }),

  birthPlace: z
    .string()
    .min(3, { message: "Tempat lahir minimal 3 karakter." }),

  birthDate: z
    .string()
    .min(1, { message: "Pilih tanggal lahir." }),

  address: z
    .string()
    .min(5, { message: "Alamat lengkap minimal 5 karakter." }),

  fatherName: z
    .string()
    .min(3, { message: "Nama lengkap ayah minimal 3 karakter." }),

  motherName: z
    .string()
    .min(3, { message: "Nama lengkap ibu minimal 3 karakter." }),

  guardianPhone: z
    .string()
    .min(10, { message: "Nomor HP minimal 10 digit." })
    .max(15, { message: "Nomor HP maksimal 15 digit." })
    .regex(/^[0-9+]+$/, {
      message: "Format nomor HP tidak valid (hanya angka/tanda +).",
    }),

  email: z
    .string()
    .email({ message: "Alamat email tidak valid." }),

  prevSchool: z
    .string()
    .min(3, { message: "Asal sekolah minimal 3 karakter." }),

  schoolLevel: z.enum(["mts", "ma"], {
    message: "Pilih jenjang sekolah.",
  }),

  photo: z.any().optional(),
  familyCard: z.any().optional(),
  birthCert: z.any().optional(),
  reportCard: z.any().optional(),
});

export type RegistrationFormInput = z.infer<typeof registrationSchema>;

export type RegistrationAPIInput = Omit<
  RegistrationFormInput,
  "photo" | "familyCard" | "birthCert" | "reportCard"
> & {
  timestamp: string;
  photoUrl: string;
  familyCardUrl: string;
  birthCertUrl: string;
  reportCardUrl: string;
};