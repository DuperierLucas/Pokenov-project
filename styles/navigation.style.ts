import {StyleSheet} from 'react-native'
import { colors } from './shared/Color'
import chroma from 'chroma-js'
import { notchOffset } from './metrics.style'

// @ts-ignore
export default StyleSheet.create({
    iconContainer: {
      padding: 10,
        marginRight: 10,
      backgroundColor: chroma(colors.main.black).alpha(0.1).css(),
        borderRadius: 25
    },
    icon: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerRightContainer: {
        height: notchOffset + 70,
    }
})