import {Button} from "../button/Button.tsx";
import {
  DisplayCounterSettings
} from "./displayCounterSettings/DisplayCounterSettings.tsx";
import s from './CounterSettings.module.scss'
import {useState} from "react";

type CounterSettingsProps = {
  maxValue: number
  startValue: number
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
  onSetClick: () => void
  hasError: boolean,
  setHasError: (hasError: boolean) => void
}

export const CounterSettings = ({
                                  maxValue,
                                  startValue,
                                  setMaxValue,
                                  setStartValue,
                                  onSetClick,
                                }: CounterSettingsProps) => {

  const [hasError, setHasError] = useState(false);
  return (
    <div className={s.counterWrapper}>
      <DisplayCounterSettings
        maxValue={maxValue}
        startValue={startValue}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
        setHasError={setHasError}
      />
      <div className={s.buttonsWrapper}>
        <Button
          title="set"
          onClick={onSetClick}
          disabled={hasError}
        />
      </div>
    </div>
  );
};

