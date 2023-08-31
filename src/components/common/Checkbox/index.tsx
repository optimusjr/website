import Typography from "@/components/common/Typography";

import styles from "./checkbox.module.scss";

interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, "type"> {
  label: string;
}

const Checkbox = ({ label, ...props }: TextFieldProps) => (
  <label className={styles.checkboxContainer}>
    <input type="checkbox" {...props} />
    <div className={styles.checkboxCard}>
      <Typography component="span" variant="p">
        {label}
      </Typography>
    </div>
  </label>
);

export default Checkbox;
