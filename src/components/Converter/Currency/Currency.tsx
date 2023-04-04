import cn from "classnames";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import style from "./Currency.module.css";

interface CurrencyProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  currency: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Currency: FC<CurrencyProps> = (props) => {
  const { value, currency, className, onChange } = props;

  return (
    <label className={cn(style.label, className)}>
      {currency}
      <input
        type="number"
        value={value}
        className={style.input}
        onChange={(event) => {
          onChange && onChange(event);
        }}
      />
    </label>
  );
};

export default Currency;
