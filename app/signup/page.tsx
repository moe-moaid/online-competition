import React from 'react'
import MciContainer from '../components/MciContainer'
import MciInput from '../components/MciInput'
import { Button } from '@/components/ui/button'

function page() {
  return (
    <div className='py-[120px] flex flex-col justify-center items-center'>
        <form action="" className='flex flex-col items-center w-full px-4 md:w-2/3 lg-1/2 justify-center py-12 bg-gray-bg rounded-lg gap-y-8'>
            <h1 className='text-white'>Sign <span className='text-legendary-500'>up</span></h1>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8">
                <MciInput name='name' label='Full Name' placeholder='Full Name' required fullWidth/>
                <MciInput name='age' label='Age' placeholder='Age' fullWidth/>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8">
                <MciInput name='email' label='Email' placeholder='Email' required fullWidth/>
                <MciInput name='phoneNumer' label='Phone Numer' placeholder='Phone Numer' required fullWidth/>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8">
                <MciInput name='password' label='Password' placeholder='Password' required fullWidth/>
                <MciInput name='confirmPass' label='Confirm Passowrd' placeholder='Confirm Passowrd' required fullWidth/>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-x-8">
                <MciInput name='country' label='Country' placeholder='Country' fullWidth/>
                <MciInput name='address' label='Address' placeholder='Address' fullWidth/>
            </div>
            <Button className='bg-legendary-500 text-white text-[20px] rounded-lg py-6 w-full sm:w-[320px]' variant='default' size='lg'>Signup</Button>
        <p className='text-white w-[318px] text-center relative mci-separator'>Or sign up with</p>
        </form>

    </div>
  )
}

export default page
