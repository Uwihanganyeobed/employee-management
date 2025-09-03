'use client'
import React from 'react';
import { Home, Users, Settings, LogOut, LayoutDashboard, FileText, Eye, Edit, Trash2, Plus, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    classname?: string;
    icon?: 'home' | 'users' | 'settings' | 'logout' | 'dashboard' | 'reports' | 'eye' | 'edit' | 'trash' | 'plus' | 'arrow-left' | 'mail' | 'phone' | 'map-pin';
}

const iconMap = {
    home: Home,
    users: Users,
    settings: Settings,
    logout: LogOut,
    dashboard: LayoutDashboard,
    reports: FileText,
    eye: Eye,
    edit: Edit,
    trash: Trash2,
    plus: Plus,
    'arrow-left': ArrowLeft,
    mail: Mail,
    phone: Phone,
    'map-pin': MapPin,
};

export default function Button({ title, onPress, classname, icon }: ButtonProps) {
    const IconComponent = icon ? iconMap[icon] : null;
    
    return (
        <button
            onClick={onPress}
            className={`flex items-center justify-center space-x-2 px-4
         py-2 font-semibold rounded-md ${classname}`}
        >
            {IconComponent && <IconComponent size={20} />}
            <span>{title}</span>
        </button>
    );
}