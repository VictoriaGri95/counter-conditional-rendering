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
  hasError: boolean,
  setHasError: (hasError: boolean) => void
}

export const CounterSettings = ({
                                  maxValue,
                                  startValue,
                                  setMaxValue,
                                  setStartValue,
                                  onSetClick,
                                  setHasError,
                                  hasError,
                                }: CounterSettingsProps) => {

  return (
    <div className={s.counterWrapper}>
      <DisplayCounterSettings
        maxValue={maxValue}
        startValue={startValue}
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
        setHasError={setHasError}
        hasError={hasError}
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

