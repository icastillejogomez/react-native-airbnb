import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: Platform.select({ ios: 54, android: 52 }),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contained: {},
  outlined: {
    borderWidth: 1,
  },
})
