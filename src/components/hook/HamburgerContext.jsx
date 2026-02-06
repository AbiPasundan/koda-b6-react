import { createContext, useState } from 'react';

export const HamburgerContext = createContext();

export const HamburgerMenu = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => setOpen(prev => !prev); 

  return (
    <HamburgerContext.Provider value={{ open, toggleMenu }}>
      {children}
    </HamburgerContext.Provider>
  );
}
