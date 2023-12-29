import Typography from "@/components/Typography";

import styles from "./checkbox.module.scss";

interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, "type"> {
  label: string;
  Icon?: React.FC;
}

const Checkbox = ({ label, Icon, ...props }: TextFieldProps) => (
  <label className={styles.checkboxContainer}>
    <input type="checkbox" {...props} />

    <div className={styles.checkboxCard}>
      {Icon && (
        <div className={styles.iconContainer}>
          <Icon />
        </div>
      )}

      <Typography component="span" variant="p">
        {label}
      </Typography>
    </div>
  </label>
);

export default Checkbox;
