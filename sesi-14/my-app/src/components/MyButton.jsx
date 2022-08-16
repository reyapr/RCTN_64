import { Text, TouchableOpacity } from "react-native"

const MyButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={props.style}
        >
            <Text style={props.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export default MyButton