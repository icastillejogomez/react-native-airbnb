import { FC, useCallback, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { AirbnbButton, SocialSingleSignOnButton, TextField } from '@/components/atoms'
import { useAuth } from '@/state'
import { useRouter } from 'expo-router'
import { AirbnbModalLayout } from '@/components/templates'
import { AirbnbText } from '@/components/native'
import { usePalette } from '@/theme'
import { socialIconSources } from '@/assets/icons/rrss'
import { iconsSources } from '@/assets/icons'

export type LoginOrSignupScreenProps = {}

const LoginOrSignupScreen: FC<LoginOrSignupScreenProps> = (props) => {
  const palette = usePalette()
  const router = useRouter()
  const auth = useAuth()
  const [signInBy, setSignInBy] = useState<'email' | 'phone'>('email')

  const handlePress = useCallback(() => {
    if (auth) {
      auth
        .login('john@acme.com', 'acme1234')
        .then(() => {
          router.back()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [router, auth])

  return (
    <AirbnbModalLayout style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <TextField
            helperText="This is a helper text"
            keepHelperTextSpace
            label="Email"
            placeholder="Hello world"
            keyboardType="email-address"
            autoCapitalize="none"
            // helperTextLeftErrorIconSource={iconsSources.chevronLeft}
            error
          />
        </View>
        {signInBy === 'phone' && (
          <AirbnbText variant="caption" color="secondary">
            We'll call or text you to confirm your number. Standard message and data rates apply.
          </AirbnbText>
        )}
      </View>

      <AirbnbButton title="Continue" variant="contained" onPress={handlePress} />

      <View style={styles.separator}>
        <View style={[styles.separatorLine, { borderColor: palette.text.secondary }]} />
        <AirbnbText size="s" color="secondary" weight="600">
          or
        </AirbnbText>
        <View style={[styles.separatorLine, { borderColor: palette.text.secondary }]} />
      </View>

      <View style={styles.socialContainer}>
        {signInBy === 'email' ? (
          <SocialSingleSignOnButton
            label="Continue with Phone"
            onPress={() => setSignInBy('phone')}
            iconSource={iconsSources.phone}
            tintColor={palette.text.primary}
          />
        ) : (
          <SocialSingleSignOnButton
            label="Continue with email"
            onPress={() => setSignInBy('email')}
            iconSource={iconsSources.email}
            tintColor={palette.text.primary}
          />
        )}
        <SocialSingleSignOnButton label="Continue with Apple" onPress={() => console.log('press')} iconSource={socialIconSources.apple} />
        <SocialSingleSignOnButton label="Continue with Google" onPress={() => console.log('press')} iconSource={socialIconSources.google} />
        <SocialSingleSignOnButton
          label="Continue with Facebook"
          onPress={() => console.log('press')}
          iconSource={socialIconSources.facebook}
        />
      </View>
    </AirbnbModalLayout>
  )
}
LoginOrSignupScreen.displayName = 'LoginOrSignupScreen'

export { LoginOrSignupScreen }

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  formContainer: {},
  form: {},
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 8,
  },
  separatorLine: {
    flex: 1,
    borderTopWidth: 0.4,
  },
  socialContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    gap: 16,
  },
})
