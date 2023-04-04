import cn from "classnames";
import { FC, useState } from "react";
import style from "./Converter.module.css";
import Currency from "./Currency/Currency";

interface BaseProps {
  className?: string;
}

enum currencies {
  "RUB",
  "USD",
}

const Converter: FC<BaseProps> = (props) => {
  const { className } = props;
  const [RUB, setRUB] = useState("");
  const [USD, setUSD] = useState("");

  const exchangeRate: number = 76.51;

  function convert(value: string, currency: currencies) {
    if (currency === currencies.RUB) {
      setRUB(value);
      value ? setUSD((+value / exchangeRate).toFixed(2)) : setUSD('');
    } else if (currency === currencies.USD) {
      setUSD(value);
      value ? setRUB((+value * exchangeRate).toFixed(2)) : setRUB('');
    }
  }

  return (
    <div className={cn(style.container, className)}>
      <form action="" className={style.form}>
        <Currency
          className={style.usd}
          currency={"USD"}
          value={USD}
          onChange={(event) => convert(event.target.value, currencies.USD)}
        />
        <div className={style.arrow}>&#8681;</div>
        <Currency
          className={style.rub}
          currency={"RUB"}
          value={RUB}
          onChange={(event) => convert(event.target.value, currencies.RUB)}
        />
      </form>
    </div>
  );
};

export default Converter;
