// import Link from "next/link";
import "./style.css";

import classnames from "classnames";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={classnames("junteSe", className)}>{children}</button>
  );
};

export default Button;
