import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800024de',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    title: {
        color: 'gold',
        fontSize: 32,
        fontFamily:'times new roman',
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
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor:'gold',
        borderWidth: 2,
        marginBottom: 10,
    },
    subtitle:{
        color: 'black',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        color: 'wine',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        alignSelf: 'center'
    },
    mapBlock: {
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    },

    mapText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#800024',
    }
})

export default styles