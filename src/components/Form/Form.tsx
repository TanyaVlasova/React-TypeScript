import { FC, HTMLAttributes, useState } from "react";
import style from "./Form.module.css";
import cn from "classnames";

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Form: FC<BaseProps> = (props) => {
  const { className } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className={cn(style.container, className)}>
      <form action="" className={style.form}>
        <label className={style.label}>
          firstname
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            name="firstName"
            type="text"
            className={style.input}
            autoComplete="off"
          />
        </label>

        <label className={style.label}>
          lastname
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            name="lastName"
            type="text"
            className={style.input}
            autoComplete="off"
          />
        </label>
        <label className={style.label}>
          age
          <input
            value={age}
            onChange={(event) => setAge(event.target.value)}
            name="age"
            type="number"
            className={style.input}
            autoComplete="off"
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
