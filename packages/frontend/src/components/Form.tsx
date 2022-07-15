import { createContext } from 'react';
import { ReactElement } from 'react';
import { InputFieldType } from './InputField';

interface IFormContext {
  values: Map<string, string>;
  setValue: (name: string, value: string) => void;
}
interface FormProps {
  children: ReactElement<InputFieldType> | Array<ReactElement<InputFieldType>>;
  onSubmit?: (values: IFormContext['values']) => any;
}

export const FormContext = createContext<Pick<IFormContext, 'setValue'> | null>(
  null
);

export const Form = ({ children, onSubmit }: FormProps) => {
  const values: IFormContext['values'] = new Map();

  const setValue: IFormContext['setValue'] = (name, value) => {
    values.set(name, value);
  };

  const submit = () => {
    onSubmit && onSubmit(values);
  };

  return (
    <FormContext.Provider value={{ setValue }}>
      <div className="flex flex-col align-items">
        {children}
        <button onClick={submit}>Submit</button>
      </div>
    </FormContext.Provider>
  );
};
