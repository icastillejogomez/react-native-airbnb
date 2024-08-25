import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { AirbnbButton, TextField } from '@/components/atoms'
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
  const { handleSubmit } = useForm<IPhoneLoginForm>({
    mode: 'onBlur',
  })

  return (
    <Animated.View style={styles.container}>
      <View style={styles.form}>
        <TextField
          label="Phone prefix"
          // helperTextLeftErrorIconSource={iconsSources.chevronLeft}
          rightDecorator={
            <Image
              source={iconsSources.chevronLeft}
              style={{ width: 20, height: 20, transform: [{ rotate: '-90deg' }] }}
              tintColor={palette.text.primary}
            />
          }
        />
        <TextField keepHelperTextSpace label="Phone number" keyboardType="phone-pad" autoCapitalize="none" />
      </View>
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
  container: {},
  form: {},
  submitButton: {
    marginTop: 24,
  },
})
