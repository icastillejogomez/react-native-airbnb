import { Platform, StyleSheet } from 'react-native'

const inputBoxHeight = Platform.select({ ios: 54, android: 52 })

export const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  inputContainer: {
    height: inputBoxHeight,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contentContainer: {
    position: 'relative',
    flex: 1,
  },
  label: {
    position: 'absolute',
    left: 0,
    top: 10,
    zIndex: 1,
  },
  input: {
    flex: 1,
    zIndex: 2,
    marginTop: 16,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
})
