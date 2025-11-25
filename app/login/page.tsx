'use client';
import React from 'react';
import MciContainer from '../components/MciContainer';
import MciInput from '../components/MciInput';
import { Button } from '@/components/ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLogin } from '@/lib/services/login';
import { toast } from 'sonner';
import { ClientError } from 'graphql-request';

type Inputs = {
  email: string;
  password: string;
};
function page() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { mutate: login, isPending } = useLogin();
  const onSubmit: SubmitHandler<Inputs> = async data => {
    login(
      { email: data.email, password: data.password },
      {
        onSuccess: () => toast.success('Logged in Successfully'),
        onError: error => {
          console.log(
            'error on client side ====',
            error,
            error instanceof ClientError,
          );
          if (error instanceof ClientError) {
            toast.error(error.response.errors?.[0].message);
          } else {
            toast.error('Something Went Wrong');
          }
        },
      },
    );
  };

  return (
    <MciContainer className="relative z-0 h-full bg-[url('/how-it-works.png')] bg-cover bg-center bg-no-repeat py-[120px] text-white">
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <div className="mx-auto w-full rounded-lg bg-gray-bg px-2 py-12 sm:px-10 md:w-4/5 md:px-14 lg:w-3/5 lg:px-24 xl:w-2/5">
        <h1 className="mb-10 w-full text-center text-[48px] font-semibold">
          log<span className="text-legendary-500">in</span>
        </h1>
        <form
          className="flex w-full flex-col items-center justify-center gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <MciInput
            label="Email"
            placeholder="Email"
            fullWidth
            type="email"
            {...register('email', { required: true })}
          />
          <MciInput
            label="Password"
            placeholder="Password"
            fullWidth
            {...register('password', { required: true })}
          />
          <Button
            className="w-full bg-legendary-500 py-6"
            variant="default"
            size="lg"
            disabled={isPending}
            type="submit"
          >
            login
          </Button>
        </form>
      </div>
    </MciContainer>
  );
}

export default page;
