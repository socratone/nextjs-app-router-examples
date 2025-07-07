import { forwardRef, InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return (
    <input ref={ref} className="border rounded-lg p-2" type="text" {...props} />
  );
});

TextField.displayName = 'TextField';

export default TextField;
