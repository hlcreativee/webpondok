'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { registrationSchema, RegistrationFormInput, RegistrationAPIInput } from '../schemas/registration.schema';
import { useRegistrationMutation } from '../mutations/useRegistrationMutation';

export function useRegistration(onSuccessCallback?: (regId: string) => void) {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormInput>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: '',
      gender: undefined,
      birthPlace: '',
      birthDate: '',
      address: '',
      fatherName: '',
      motherName: '',
      guardianPhone: '',
      email: '',
      prevSchool: '',
      schoolLevel: undefined,
    },
  });

  const mutation = useRegistrationMutation();

  const onSubmit = async (data: RegistrationFormInput) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    // Mock File URL uploads: In a real system, you would upload files to S3/Drive first
    // Here we generate mock URL links to represent files
    const timestamp = new Date().toISOString();
    const photoUrl = data.photo && data.photo[0]
      ? `https://drive.google.com/mock-file/photo-${data.photo[0].name}`
      : 'Tidak ada file';
    const familyCardUrl = data.familyCard && data.familyCard[0]
      ? `https://drive.google.com/mock-file/kk-${data.familyCard[0].name}`
      : 'Tidak ada file';
    const birthCertUrl = data.birthCert && data.birthCert[0]
      ? `https://drive.google.com/mock-file/akta-${data.birthCert[0].name}`
      : 'Tidak ada file';
    const reportCardUrl = data.reportCard && data.reportCard[0]
      ? `https://drive.google.com/mock-file/rapor-${data.reportCard[0].name}`
      : 'Tidak ada file';

    const apiPayload: RegistrationAPIInput = {
      fullName: data.fullName,
      gender: data.gender,
      birthPlace: data.birthPlace,
      birthDate: data.birthDate,
      address: data.address,
      fatherName: data.fatherName,
      motherName: data.motherName,
      guardianPhone: data.guardianPhone,
      email: data.email,
      prevSchool: data.prevSchool,
      schoolLevel: data.schoolLevel,
      timestamp,
      photoUrl,
      familyCardUrl,
      birthCertUrl,
      reportCardUrl,
    };

    try {
      const response = await mutation.mutateAsync(apiPayload);
      if (response.success) {
        setSuccessMessage('Pendaftaran berhasil dikirim! Silakan simpan Kartu Ujian Anda.');
        reset(); // Reset form fields
        if (onSuccessCallback && response.registrationId) {
          onSuccessCallback(response.registrationId);
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Terjadi kesalahan saat memproses pendaftaran.');
    }
  };

  return {
    register,
    errors,
    isLoading: mutation.isPending,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
    submitForm: handleSubmit(onSubmit),
  };
}
