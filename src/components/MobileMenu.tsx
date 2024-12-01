import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`} ref={menuRef}>
      <div className="mobile-menu-header">
        <button className="close-button" onClick={onClose} aria-label="Close menu">
          <X size={24} />
        </button>
      </div>
      <nav className="mobile-menu-nav">
        <a href="#home" onClick={onClose}>Home</a>
        <a href="#about" onClick={onClose}>About</a>
        <a href="#products" onClick={onClose}>Products</a>
        <a href="#faq" onClick={onClose}>FAQ</a>
        <a href="#testimonials" onClick={onClose}>Testimonials</a>
      </nav>
    </div>
  );
}