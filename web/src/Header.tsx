import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (pros) => {
  return (
    <header>
      <h1>{pros.title}</h1>
    </header>
  )
}

export default Header;