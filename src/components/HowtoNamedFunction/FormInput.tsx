import { forwardRef, type ForwardedRef } from 'react';

type Props = {
    message: string;
}

export const FormInput = forwardRef(function FormInput(
    { message, ...props }:Props, 
    forwardedRef: ForwardedRef<HTMLInputElement>) {
    return (
        <div className='flex gap-3 items-center'>
            <p className='text-2xl text-gray-400'>{message}</p>
            <input ref={forwardedRef} {...props} className='w-auto' />
        </div>
    )
})