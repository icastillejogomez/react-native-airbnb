import { FC, useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { AirbnbButton, ControlledTextField, TextFieldGroup } from '@/components/atoms'
import { Image } from 'expo-image'
import { useForm } from 'react-hook-form'
import { iconsSources } from '@/assets/icons'
import { AirbnbText } from '@/components/native'
import { usePalette } from '@/theme'
import Animated from 'react-native-reanimated'

interface IPhoneLoginForm {
  phonePrefix: string
  phoneNumber: string
}

export type AuthPhoneFormProps = {
  onSubmit: (payload: IPhoneLoginForm) => void
}

const AuthPhoneForm: FC<AuthPhoneFormProps> = ({ onSubmit }) => {
  const palette = usePalette()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPhoneLoginForm>({
    mode: 'all',
  })

  const errorMessage = useMemo(
    () => errors?.phonePrefix?.message ?? errors?.phoneNumber?.message,
    [errors.phoneNumber?.message, errors.phonePrefix?.message],
  )

  return (
    <Animated.View style={styles.container}>
      <TextFieldGroup style={styles.form} error={!!errorMessage} helperText={errorMessage}>
        <ControlledTextField
          label="Phone prefix"
          name="phonePrefix"
          control={control}
          rules={{
            validate: (value) => {
              if (!value) {
                return 'Phone prefix is required'
              }

              return true
            },
          }}
          rightDecorator={
            <Image
              source={iconsSources.chevronLeft}
              style={{ width: 20, height: 20, transform: [{ rotate: '-90deg' }] }}
              tintColor={palette.text.primary}
            />
          }
        />

        <ControlledTextField
          label="Phone number"
          keyboardType="phone-pad"
          autoCapitalize="none"
          rules={{
            validate: (value) => {
              if (!value) {
                return 'Phone number is required'
              }

              return true
            },
          }}
          name="phoneNumber"
          control={control}
        />
      </TextFieldGroup>
      <AirbnbText variant="caption" color="secondary">
        We'll call or text you to confirm your number. Standard message and data rates apply.
      </AirbnbText>

      <AirbnbButton style={styles.submitButton} title="Continue" variant="contained" onPress={handleSubmit(onSubmit)} />
    </Animated.View>
  )
}
AuthPhoneForm.displayName = 'AuthPhoneForm'
export { AuthPhoneForm }

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  form: {},
  submitButton: {
    marginTop: 0,
  },
})
