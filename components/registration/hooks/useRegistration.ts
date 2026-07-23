'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

import {
  registrationSchema,
  RegistrationFormInput,
  RegistrationAPIInput,
} from '../schemas/registration.schema';

import { useRegistrationMutation } from '../mutations/useRegistrationMutation';


export function useRegistration(
  onSuccessCallback?: (regId: string) => void
) {


  const [
    successMessage,
    setSuccessMessage
  ] = useState<string | null>(null);



  const [
    errorMessage,
    setErrorMessage
  ] = useState<string | null>(null);



  // STATUS PROSES UPLOAD / SUBMIT
  const [
    processStatus,
    setProcessStatus
  ] = useState<string | null>(null);




  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    },

  } = useForm<RegistrationFormInput>({

    resolver: zodResolver(
      registrationSchema
    ),


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

    }

  });




  const mutation =
    useRegistrationMutation();





  async function uploadFile(
    file: File,
    type: string
  ): Promise<string> {


    const formData =
      new FormData();



    formData.append(
      'file',
      file
    );



    formData.append(
      'type',
      type
    );




    const response =
      await fetch(
        '/api/upload',
        {
          method: 'POST',
          body: formData
        }
      );




    const result =
      await response.json();




    if (
      !response.ok ||
      !result.success
    ) {

      throw new Error(
        result.message ||
        'Upload file gagal'
      );

    }




    return result.url;

  }








  const onSubmit =
    async (
      data: RegistrationFormInput
    ) => {



      setSuccessMessage(null);

      setErrorMessage(null);



      setProcessStatus(
        "Menyiapkan data pendaftaran..."
      );




      try {


        const timestamp =
          new Date()
            .toISOString();




        let photoUrl = '';

        let familyCardUrl = '';

        let birthCertUrl = '';





        if (data.photo?.[0]) {


          setProcessStatus(
            "Mengupload foto santri..."
          );



          photoUrl =
            await uploadFile(
              data.photo[0],
              'photo'
            );

        }






        if (data.familyCard?.[0]) {


          setProcessStatus(
            "Mengupload Kartu Keluarga..."
          );



          familyCardUrl =
            await uploadFile(
              data.familyCard[0],
              'familyCard'
            );

        }







        if (data.birthCert?.[0]) {


          setProcessStatus(
            "Mengupload Akta Kelahiran..."
          );



          birthCertUrl =
            await uploadFile(
              data.birthCert[0],
              'birthCert'
            );

        }

        const apiPayload:
          RegistrationAPIInput =
        {


          fullName:
            data.fullName,


          gender:
            data.gender,


          birthPlace:
            data.birthPlace,


          birthDate:
            data.birthDate,


          address:
            data.address,


          fatherName:
            data.fatherName,


          motherName:
            data.motherName,


          guardianPhone:
            data.guardianPhone,


          email:
            data.email,


          prevSchool:
            data.prevSchool,


          schoolLevel:
            data.schoolLevel,


          timestamp,


          photoUrl,


          familyCardUrl,


          birthCertUrl,

        };





        console.log(
          "PAYLOAD REGISTRATION:",
          apiPayload
        );






        setProcessStatus(
          "Menyimpan data pendaftaran..."
        );





        const response =
          await mutation.mutateAsync(
            apiPayload
          );








        if (response.success) {


          setProcessStatus(
            "Pendaftaran berhasil!"
          );



          setSuccessMessage(
            'Pendaftaran berhasil dikirim! Silakan simpan Kartu Ujian Anda.'
          );



          reset();





          if (
            onSuccessCallback &&
            response.registrationId
          ) {


            onSuccessCallback(
              response.registrationId
            );

          }





        } else {



          setErrorMessage(
            response.message ||
            'Pendaftaran gagal.'
          );



        }





      } catch (error) {


        console.error(
          error
        );



        if (error instanceof Error) {


          setErrorMessage(
            error.message
          );



        } else {


          setErrorMessage(
            'Terjadi kesalahan saat memproses pendaftaran.'
          );

        }



      } finally {


        // hilangkan status setelah selesai
        setTimeout(() => {

          setProcessStatus(null);

        }, 2000);


      }


    };







  return {


    register,


    errors,

    isLoading:
      mutation.isPending ||
      !!processStatus,



    processStatus,



    successMessage,


    errorMessage,


    setSuccessMessage,


    setErrorMessage,



    submitForm:
      handleSubmit(onSubmit),


  };

}