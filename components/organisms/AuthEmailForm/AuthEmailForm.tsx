import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { AirbnbButton, TextField } from '@/components/atoms'
import { Controller, useForm } from 'react-hook-form'
import Animated from 'react-native-reanimated'

interface IEmailLoginForm {
  email: string
}

export type AuthEmailFormProps = {
  onSubmit: (payload: IEmailLoginForm) => void
}

const AuthEmailForm: FC<AuthEmailFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<IEmailLoginForm>({
    mode: 'onBlur',
  })

  return (
    <Animated.View style={styles.container}>
      <View style={styles.form}>
        <Controller
          control={control}
          name="email"
          rules={{
            validate: (value) => {
              // Check if is valid email
              if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true
              }

              return 'This is not a valid email address'
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <TextField
                keepHelperTextSpace
                label="Email"
                helperText={error ? error.message : undefined}
                keyboardType="email-address"
                autoCapitalize="none"
                error={!!error?.message}
                value={field.value}
                onChangeText={(text) => {
                  field.onChange(text)
                }}
              />
            )
          }}
        />
      </View>

      <AirbnbButton title="Continue" variant="contained" onPress={handleSubmit(onSubmit)} />
    </Animated.View>
  )
}
AuthEmailForm.displayName = 'AuthEmailForm'
export { AuthEmailForm }

const styles = StyleSheet.create({
  container: {},
  form: {},
})
