import React, { FC } from 'react'
import { Image, ImageProps } from 'expo-image'

type CityKey =
  | 'amsterdam'
  | 'athens'
  | 'barcelona'
  | 'berlin'
  | 'dublin'
  | 'lisbon'
  | 'london'
  | 'paris'
  | 'rome'
  | 'tokyo'

type CityImageProps = Omit<ImageProps, 'source'> & {
  cityKey: CityKey
}

export const CityImage: FC<CityImageProps> = ({ cityKey, ...props }) => {
  return <Image source={cityKey} {...props} />
}
