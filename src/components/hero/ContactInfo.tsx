import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${href ? 'hover:scale-105' : ''} transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {  return (
    <div className="flex-1 flex-row justify-center items-center w-[50%] gap-0">
      <ContactItem 
        icon={<Phone className="w-5 h-5" />} 
        text="+91 9306600235" 
        href="tel:+919306600235" 
      /> 
      <ContactItem 
        icon={<Mail className="w-5 h-5 gap-2" />} 
        text="devpanchal465@gmail.com" 
        href="mailto:devpanchal465@gmail.com" 
      /> 
      <ContactItem 
        icon={<MapPin className="w-5 h-5" />} 
        text="Haryana, India" 
      /> 
    </div>
  );
}
