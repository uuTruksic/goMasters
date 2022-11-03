import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

export function useForm<T>(callback: () => void, initialState: T): { onChange: (e: ChangeEvent<HTMLInputElement>) => void, onSubmit: (e: FormEvent<HTMLFormElement>) => void, values: T} {
  const [values, setValues] = useState(initialState);

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // triggering the callback
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
