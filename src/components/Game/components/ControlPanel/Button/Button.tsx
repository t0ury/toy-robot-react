/** @format */

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handleClick: VoidFunction;
}

const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
