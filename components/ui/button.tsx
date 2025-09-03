import React from 'react';
import { IconNode } from 'lucide-react';

interface ButtonProps {
    title: string;
    onPress: () => void;
    classname?: string; // Make the classname optional with '?'
    icon?: React.ComponentType<{ size?: number }>; // Specify the correct type for a React component
}

export default function Button({ title, onPress, classname, icon: Icon }: ButtonProps) {
    return (
        <button
            onClick={onPress}
            className={`flex items-center justify-center space-x-2 px-4
         py-2 font-semibold rounded-md ${classname}`}
        >
            {Icon && <Icon size={20} />}
            <span>{title}</span>
        </button>
    );
}