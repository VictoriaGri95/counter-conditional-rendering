import {DisplayCounter} from "./displayCounter/DisplayCounter.tsx";
import s from './Counter.module.scss'
import {Button} from "../button/Button.tsx";

type CounterProps = {
  counter: number
  onInc: () => void
  onReset: () => void
  maxValue: number
  startValue: number
  onOpenSettings: () => void
}

export const Counter = ({
                          counter,
                          onInc,
                          onReset,
                          maxValue,
                          startValue,
                          onOpenSettings
                        }: CounterProps) => {

  const hasReachedMax = counter === maxValue;
  const isStartValue = counter === startValue;

  return (
    <div className={s.counterWrapper}>
      <DisplayCounter
        count={counter}
        isMax={hasReachedMax}
      />

      <div className={s.buttonsWrapper}>
        <Button
          title="inc"
          onClick={onInc}
          disabled={hasReachedMax}
        />
        <Button
          title="reset"
          onClick={onReset}
          disabled={isStartValue}
        />
        <Button
          title="set"
          onClick={onOpenSettings}
        />
      </div>

    </div>
  );
};

