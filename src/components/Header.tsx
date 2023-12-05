import  { ReactNode } from "react";
type headerTypes = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
const Header = ({ children, image }: headerTypes) => {
  return (
    <header>
      <img {...image } />
      {children}
    </header>
  );
};

export default Header;
