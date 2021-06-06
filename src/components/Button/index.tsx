import style from "./Button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleOverride?: true;
  styling?: string;
  children: React.ReactNode;
}

function Button({ styleOverride, styling, children, ...props }: Props) {
  const buttonClass = styleOverride
    ? styling
    : styling
    ? `${style.button} ${styling}`
    : style.button;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
