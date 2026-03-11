import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
    },
    button: {
        width: '80%',
        height: 40,
        backgroundColor: '#2A7FDB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        alignSelf: 'center'
    }
})

export default styles