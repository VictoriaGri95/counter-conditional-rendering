import s from './displayCounter.module.scss'

type DisplayCounterPropsType = {
  count: number
  isMax: boolean
}

export const DisplayCounter = ({count, isMax}: DisplayCounterPropsType) => {
  return (
    <div className={`${s.displayCounter} ${isMax ? s.counterRed : ''}`}>
      <span>{count}</span>
    </div>
  );
};

