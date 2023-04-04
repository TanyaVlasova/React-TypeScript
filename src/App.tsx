import { FC, HTMLAttributes } from 'react';
import style from './App.module.css';
import Clock from './components/Clock/Clock';
import cn from 'classnames';
import Form from './components/Form/Form';
import Converter from './components/Converter/Converter';

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string;
}

const App: FC<BaseProps> = (props) => {
  return (
    <div className={style.container}>
      <Clock className={cn(style.clock)}/>
      <Form className={cn(style.form)}/>
      <Converter />
    </div>
  );
}

export default App;
