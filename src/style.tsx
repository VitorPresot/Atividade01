import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00d9ff',
        marginBottom: 24,
        textAlign: 'center',
        letterSpacing: 2,
        textShadowColor: '#00d9ff',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    carItem: {
        backgroundColor: '#1a1a2e',
        borderRadius: 8,
        paddingVertical: 18,
        paddingHorizontal: 16,
        marginBottom: 14,
        borderLeftWidth: 5,
        borderLeftColor: '#00d9ff',
        borderRightWidth: 2,
        borderRightColor: '#ff0080',
        shadowColor: '#00d9ff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },
    carTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: 1,
    },
})

export default styles