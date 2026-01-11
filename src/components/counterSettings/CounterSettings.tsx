import {Button} from "../button/Button.tsx";
import {
  DisplayCounterSettings
} from "./displayCounterSettings/DisplayCounterSettings.tsx";
import s from './CounterSettings.module.scss'

type CounterSettingsProps = {
  maxValue: number
startValue: number
setMaxValue: (value: number) => void
setStartValue: (value: number) => void
onSetClick: () => void
}

export const CounterSettings = ({maxValue, startValue, setMaxValue, setStartValue, onSetClick}: CounterSettingsProps) => {
  return (
    <div className={s.counterWrapper}>
      <DisplayCounterSettings
        maxValue={maxValue}
        startValue={startValue}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
      />
      <div className={s.buttonsWrapper}>
        <Button
          title="set"
          onClick={onSetClick}
        />
      </div>
    </div>
  );
};

