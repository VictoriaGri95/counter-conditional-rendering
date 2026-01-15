import s from './DisplayCounterSettings.module.scss'
import {type ChangeEvent, useState} from "react";

type DisplayCounterSettingsProps = {
  maxValue: number
  startValue: number
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
  hasError: boolean
  setHasError: (hasError: boolean) => void
}

export const DisplayCounterSettings = ({
                                         maxValue,
                                         startValue,
                                         setMaxValue,
                                         setStartValue,
                                         setHasError,
                                       }: DisplayCounterSettingsProps) => {

  const [startError, setStartError] = useState(false);
  const [maxError, setMaxError] = useState(false);

  const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;

    setStartValue(value);
    const error = value < 0 || value >= maxValue

    setStartError(error);
    setHasError(error || maxError)

  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;

    setMaxValue(value);
    const error = value <= startValue || value < 0
    setMaxError(error);
    setHasError(error || startError)


  }

  return (
    <div className={s.inputWrapper}>
      <div className={s.settingInput}>
        <label className={s.label}>
          Max value:
        </label>
        <input
          type="number"
          className={`${s.input} ${maxError ? s.error : ""}`}
          value={maxValue}
          onChange={handleMaxChange}
        />

      </div>

      <div className={s.settingInput}>
        <label className={s.label}>
          Start value:
        </label>
        <input
          type="number"
          className={`${s.input} ${startError ? s.error : ""}`}
          value={startValue}
          onChange={handleStartChange}
        />

      </div>

    </div>
  );
};

