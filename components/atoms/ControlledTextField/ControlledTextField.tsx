import { forwardRef } from 'react'
import { TextField, TextFieldProps } from '../TextField'
import { Control, useController, RegisterOptions } from 'react-hook-form'
import { TextInput } from 'react-native'

export type ControlledTextFieldProps = TextFieldProps & {
  name: string
  control: Control<any>
  rules?: RegisterOptions
  hideHelperText?: boolean
}

const ControlledTextField = forwardRef<TextInput, ControlledTextFieldProps>((props, ref) => {
  // Destructure props
  const { name, control, rules, helperText, hideHelperText, ...rest } = props

  // Decare hooks
  const { field, fieldState } = useController({ name, control, rules })

  return (
    <TextField
      ref={ref}
      value={field.value}
      onChangeText={field.onChange}
      error={!!fieldState.error?.message}
      helperText={hideHelperText ? null : (fieldState.error?.message ?? helperText)}
      {...rest}
    />
  )
})
ControlledTextField.displayName = 'ControlledTextField'

export { ControlledTextField }
