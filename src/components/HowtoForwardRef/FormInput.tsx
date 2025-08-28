import React, {forwardRef} from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return <input ref={ref} {...props} className='w-auto'/>
})