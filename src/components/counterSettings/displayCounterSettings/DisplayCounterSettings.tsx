import s from './DisplayCounterSettings.module.scss'
import type {ChangeEvent} from "react";

type DisplayCounterSettingsProps = {
  maxValue: number
  startValue: number
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
}

export const DisplayCounterSettings = ({maxValue, startValue, setMaxValue, setStartValue}: DisplayCounterSettingsProps) => {

  const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setStartValue(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setMaxValue(value);
  }

  return (
    <div className={s.inputWrapper}>
      <div className={s.settingInput}>
        <label className={s.label}>
          Max value:
        </label>
        <input
          type="number"
          className={s.input}
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
          className={s.input}
          value={startValue}
          onChange={handleStartChange}
        />

      </div>

    </div>
  );
};

