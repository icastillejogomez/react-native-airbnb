import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
})

export default styles
