import ErrorIcon from "@/components/icons/Error";

import styles from "./alert.module.scss";

interface Props {
  severity: "error"; // Se necessário, implementar "warning", "info" e "success"
  children: React.ReactNode;
}

const icons = {
  error: ErrorIcon,
};

const Alert = ({ children, severity }: Props) => {
  const Icon = icons[severity];

  return (
    <div className={styles[severity]}>
      <Icon />
      {children}
    </div>
  );
};

export default Alert;
