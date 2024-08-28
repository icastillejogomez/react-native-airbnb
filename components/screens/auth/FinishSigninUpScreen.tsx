import { iconsSources } from '@/assets/icons'
import { AirbnbButton, ControlledTextField, TextFieldGroup } from '@/components/atoms'
import { AirbnbText } from '@/components/native'
import { AirbnbModalLayout } from '@/components/templates'
import { usePalette } from '@/theme'
import { Image } from 'expo-image'
import { FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useHeaderHeight } from '@react-navigation/elements'

type IForm = {
  legal: {
    firstName: string
    lastName: string
  }
  brithdate: string
  email: string
  password: string
}

export type FinishSigninUpScreenProps = {
  email: string
}

const FinishSigninUpScreen: FC<FinishSigninUpScreenProps> = ({ email }) => {
  // Declare hooks
  const palette = usePalette()
  const headerHeight = useHeaderHeight()
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      legal: {
        firstName: '',
        lastName: '',
      },
      brithdate: '',
      email,
      password: '',
    },
  })

  const onSubmit = useCallback((data: IForm) => {
    console.log(data)
  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : undefined}
      style={styles.keyboardAvoidingView}
    >
      <AirbnbModalLayout style={styles.container} keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled">
        <View style={styles.section}>
          <AirbnbText variant="body2" color="primary" weight="600">
            Legal name
          </AirbnbText>

          <TextFieldGroup
            helperText={
              <AirbnbText variant="caption" color="secondary" size={'xs'} style={styles.helperText}>
                {'Make sure this matches the name on your government ID. If you go by another name, you can add a '}
                <AirbnbText variant="caption" color="secondary" decoration="underline" weight="600" size={'xs'}>
                  {'preferred first name'}
                </AirbnbText>
                {' .'}
              </AirbnbText>
            }
          >
            <ControlledTextField control={control} name="legal.firstName" label="First name on ID" />
            <ControlledTextField control={control} name="legal.lastName" label="Last name on ID" />
          </TextFieldGroup>
        </View>

        <View style={styles.section}>
          <AirbnbText variant="body2" color="primary" weight="600">
            Date of birth
          </AirbnbText>
          <TextFieldGroup helperText="To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb.">
            <ControlledTextField
              control={control}
              name="brithdate"
              label="Date of birth"
              rightDecorator={
                <Image
                  source={iconsSources.chevronRight}
                  style={{ width: 20, height: 20, transform: [{ rotate: '90deg' }] }}
                  contentFit="cover"
                  tintColor={palette.text.primary}
                />
              }
            />
          </TextFieldGroup>
        </View>

        <View style={styles.section}>
          <AirbnbText variant="body2" color="primary" weight="600">
            Email
          </AirbnbText>
          <TextFieldGroup helperText="We'll email you trip confirmations and receipts.">
            <ControlledTextField control={control} name="email" label="Email" />
          </TextFieldGroup>
        </View>

        <View style={styles.section}>
          <AirbnbText variant="body2" color="primary" weight="600">
            Password
          </AirbnbText>
          <TextFieldGroup>
            <ControlledTextField
              control={control}
              name="password"
              label="Password"
              keyboardType="default"
              rightDecorator={
                <TouchableOpacity>
                  <AirbnbText variant="caption" color="primary" weight="600" size="xs" decoration="underline">
                    Show
                  </AirbnbText>
                </TouchableOpacity>
              }
            />
          </TextFieldGroup>
        </View>

        <View style={styles.submitSection}>
          <AirbnbText variant="caption" color="secondary">
            {"By selecting Agree and Continue, I agree to Airbnb's "}
            <AirbnbText variant="caption" color="legal" weight="600" decoration="underline">
              {'Terms of Service'}
            </AirbnbText>
            {', '}
            <AirbnbText variant="caption" color="legal" weight="600" decoration="underline">
              {'Payments Terms of Service'}
            </AirbnbText>
            {' and '}
            <AirbnbText variant="caption" color="legal" weight="600" decoration="underline">
              {'Nondiscrimination Policy'}
            </AirbnbText>
            {' and acknowledge the '}
            <AirbnbText variant="caption" color="legal" weight="600" decoration="underline">
              {'Privacy Policy'}
            </AirbnbText>
            {'.'}
          </AirbnbText>

          <AirbnbButton title="Agree and Continue" onPress={handleSubmit(onSubmit)} />
        </View>

        <View style={styles.footer}>
          <AirbnbText variant="caption" color="secondary" size="xxs">
            Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving
            these at any time in your account settings or directly from the marketing notification.
          </AirbnbText>
          <View style={styles.checkboxContainer}>
            <View style={[styles.checkbox, { borderColor: palette.text.secondary, backgroundColor: palette.background.primary }]} />
            <AirbnbText variant="caption" color="secondary" style={styles.checkboxText}>
              I don't want to receive marketing messages from Airbnb
            </AirbnbText>
          </View>
        </View>
      </AirbnbModalLayout>
    </KeyboardAvoidingView>
  )
}
FinishSigninUpScreen.displayName = 'FinishSigninUpScreen'

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    gap: 32,
    marginTop: 16,
    paddingBottom: 100,
  },
  section: {
    gap: 16,
  },
  submitSection: {
    gap: 32,
  },
  helperText: {
    marginTop: 4,
  },
  footer: {
    marginTop: 8,
    gap: 24,
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
  },
  checkboxText: {
    flex: 1,
    fontSize: 11,
  },
})

export { FinishSigninUpScreen }
