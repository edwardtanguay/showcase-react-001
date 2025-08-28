import { FormInput } from './FormInput';
import { useRef } from 'react';

type Props = {
    num: number;
}

export const FormRow = ({num}:Props) => {

    const focusMessage = () => {
        messageRef.current?.focus();
    }

    const messageRef = useRef<HTMLInputElement>(null);

    return (
        <div className='flex gap-2'>
            <FormInput ref={messageRef} />
            <button onClick={focusMessage}>Focus input box #{num}</button>
        </div>
    )
}