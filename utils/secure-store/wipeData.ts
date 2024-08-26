import * as SecureStore from 'expo-secure-store'
import { Constants } from '@/Constants'

const keys = Object.values(Constants.secureStore.keys)

export async function wipeSecureStoreData(): Promise<void> {
  await Promise.all(keys.map((key) => SecureStore.deleteItemAsync(key)))
}
