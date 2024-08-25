import { FC, PropsWithChildren } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { Image, ImageSource } from 'expo-image'
import { iconsSources } from '@/assets/icons'
import { AirbnbText } from '@/components/native'
import { usePalette } from '@/theme'

export type TextFieldHelperTextProps = ViewProps &
  PropsWithChildren<{
    containerTestID?: string
    testID?: string
    hideLeftErrorIcon?: boolean
    leftErrorIconSource?: ImageSource
    error?: boolean
  }>

const TextFieldHelperText: FC<TextFieldHelperTextProps> = ({
  children,
  containerTestID,
  testID,
  hideLeftErrorIcon,
  leftErrorIconSource,
  error,
  style: parentStyle,
  ...rest
}) => {
  const palette = usePalette()

  return (
    <View style={[styles.helperTextContainer, parentStyle]} testID={containerTestID} {...rest}>
      {!children ? null : typeof children !== 'string' ? (
        children
      ) : (
        <>
          {!hideLeftErrorIcon && error && (
            <Image
              source={leftErrorIconSource ?? iconsSources.getHelp}
              style={styles.helperTextIcon}
              tintColor={palette.text['primary-error']}
              contentFit="cover"
            />
          )}
          <AirbnbText
            testID={testID}
            variant="caption"
            color={error ? 'primary-error' : 'secondary'}
            size="xs"
            weight={error ? '600' : '500'}
            style={styles.helperText}
          >
            {children}
          </AirbnbText>
        </>
      )}
    </View>
  )
}
TextFieldHelperText.displayName = 'TextFieldHelperText'

const styles = StyleSheet.create({
  helperTextContainer: {
    minHeight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  helperTextIcon: {
    width: 16,
    height: 16,
  },
  helperText: {},
})

export { TextFieldHelperText }
