import { useContext } from 'react';
import { FormContext } from './Form';

export const InputField = (props: React.HTMLProps<HTMLInputElement>) => {
  const ctx = useContext(FormContext);
  return (
    <label>
      <p>{props.label}</p>
      <input
        onInput={(e) => {
          if (props.name) ctx?.setValue(props.name, e.currentTarget.value);
        }}
        {...props}
        className="border-black border-2 rounded outline-none"
      ></input>
    </label>
  );
};

export type InputFieldType = typeof InputField;
