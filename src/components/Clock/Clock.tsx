import { FC } from "react";
import cn from "classnames";
import { useState, useEffect } from "react";
import style from "./Clock.module.css";

interface BaseProps {
  className?: string;
}

const Clock: FC<BaseProps> = (props) => {
  const { className } = props;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className={cn(style.container, className)}>
      <div className={cn(style.clock)}>
        <span>{time.toLocaleTimeString()}</span>
      </div>      
    </div>

  );
};

export default Clock;
