import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonProps {
    icon: keyof typeof MaterialIcons.glyphMap; // Type for MaterialIcons names
    size?: number;
    color?: string;
    style?: object;
    onPress: () => void; // Function type for onPress
}

const Button: React.FC<ButtonProps> = ({ icon, size, color, style, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, style]}
            onPress={onPress}
        >
            <MaterialIcons 
                name={icon}
                size={size ? size : 28} // if size is passed in props we use it else we use 28
                color={color ? color : '#f1f1f1'}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Button;
