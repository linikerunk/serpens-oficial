import { useState } from 'react'

export interface IKeyboardEventOnInputField extends KeyboardEvent {
  target: HTMLInputElement
}

const types = {
  email: {
    regex: /\S+@\S+\.\S+/,
    message: 'Preencha um email válido'
  }
}

export function useForm() {
  const [value, setValue] = useState('')
  const [error, setError] = useState<boolean>(true)

  function validate(value: string) {
    if (value.length === 0) {
      setError(true)
      return false
    } else if (!types.email.regex.test(value)) {
      setError(true)
      return false
    } else {
      setError(false)
      return true
    }
  }

  function onChange({ target }: IKeyboardEventOnInputField) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}
