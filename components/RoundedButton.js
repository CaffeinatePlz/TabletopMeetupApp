import { Text, View, Pressable } from "react-native";
import { styles } from "./RoundedButton.styles";

export const RoundedButton = ({
    text,
    textColor,
    buttonColor,
    onPress,
    disabled,
}) => {
    return (
        <Pressable
            disabled={disabled}
            onPress={onPress}
            style={({ pressed }) => ({
                ...styles.buttonOuter,
                opacity: pressed || disabled ? 0.5 : undefined,
                borderColor: buttonColor,
            })}
        >
            <View style={[styles.buttonInner, { backgroundColor: buttonColor }]}>
                <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
            </View>
        </Pressable>
    );
};
