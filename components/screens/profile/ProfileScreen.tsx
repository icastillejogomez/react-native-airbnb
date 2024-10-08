import { iconsSources } from '@/assets/icons'
import { AirbnbButton } from '@/components/atoms'
import { AirbnbYourPlaceCard } from '@/components/molecules'
import { AirbnbText } from '@/components/native'
import { AirbnbMainApplicationLayout } from '@/components/templates'
import { useAuth } from '@/state'
import { usePalette } from '@/theme'
import { Image, ImageSource } from 'expo-image'
import { Href, Link, useRouter } from 'expo-router'
import { FC, useCallback } from 'react'
import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'

type SettingsListNavigationProps = {
  iconSource: ImageSource
  title: string
  uri: Href
}

const settingsListNavigation: SettingsListNavigationProps[] = [
  {
    iconSource: iconsSources.settings,
    title: 'Settings',
    uri: '/(settings)/settings',
  },
  {
    iconSource: iconsSources.accessiility,
    title: 'Accessibility',
    uri: '/(settings)/settings',
  },
  {
    iconSource: iconsSources.getHelp,
    title: 'Get help',
    uri: '/(settings)/settings',
  },
  {
    iconSource: iconsSources.thirdPartyTools,
    title: 'Third-party tools',
    uri: '/(settings)/settings',
  },
]

export type ProfileScreenProps = {}

const ProfileScreen: FC<ProfileScreenProps> = () => {
  const auth = useAuth()
  const router = useRouter()
  const palette = usePalette()

  const handleLogoutPress = useCallback(async () => {
    await auth?.logout()
  }, [auth])

  const handleLoginPress = useCallback(() => {
    router.push('/(auth)')
  }, [router])

  return (
    <AirbnbMainApplicationLayout headerTitle="Profile" headerContainerStyle={styles.header} scrollEnabled>
      <AirbnbText color="secondary">Log in to start planning your next trip.</AirbnbText>

      {auth && !auth.userProfile && (
        <View style={styles.authContainer}>
          <AirbnbButton title="Log in" variant="contained" onPress={handleLoginPress} />
          <View style={styles.signupContentRow}>
            <AirbnbText variant="caption" color="secondary">
              Don't have an account?
            </AirbnbText>
            {}
            <Link href="/(auth)/login">
              <AirbnbText variant="caption" weight="600" color="primary" decoration="underline">
                Sign up
              </AirbnbText>
            </Link>
          </View>
        </View>
      )}

      <AirbnbYourPlaceCard style={styles.airbnbYourPlaceCard} />

      <FlatList
        style={styles.settingsList}
        contentContainerStyle={styles.settingsListContentContainer}
        scrollEnabled={false}
        data={settingsListNavigation}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Link href={item.uri} asChild>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.settingsListItem}>
                <Image
                  source={item.iconSource}
                  contentFit="cover"
                  cachePolicy={'memory-disk'}
                  style={styles.icon}
                  tintColor={palette.icon.primary}
                />
                <AirbnbText variant="body1" weight="400" size={Platform.OS === 'ios' ? 'm' : 's'} style={styles.settingsListItemTitle}>
                  {item.title}
                </AirbnbText>
                <Image source={iconsSources.chevronRight} contentFit="cover" style={styles.icon} tintColor={palette.icon.secondary} />
              </View>
            </TouchableOpacity>
          </Link>
        )}
        ItemSeparatorComponent={() => <View style={[styles.separator, { borderColor: palette.text.secondary }]} />}
      />

      {auth && auth.userProfile && (
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleLogoutPress} activeOpacity={0.6}>
            <AirbnbText variant="caption" color="secondary" decoration="underline">
              Log out
            </AirbnbText>
          </TouchableOpacity>
        </View>
      )}
    </AirbnbMainApplicationLayout>
  )
}
ProfileScreen.displayName = 'ProfileScreen'

export { ProfileScreen }

const styles = StyleSheet.create({
  header: {
    marginTop: 48,
    marginBottom: 8,
  },
  authContainer: {
    marginTop: 40,
    gap: 24,
  },
  signupContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  airbnbYourPlaceCard: {
    marginTop: 48,
  },
  settingsList: {
    marginTop: 24,
    flex: 1,
  },
  settingsListContentContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    borderTopWidth: 0.2,
  },
  settingsListItem: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  settingsListItemTitle: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logoutContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
})
