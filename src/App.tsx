import s from './App.module.scss'
import {Counter} from "./components/counter/Counter.tsx";
import { useState} from "react";
import {
  CounterSettings
} from "./components/counterSettings/CounterSettings.tsx";

function App() {
  const [showSettings, setShowSettings] = useState(false)

  const getValueFromLS = (key: "startValue" | "maxValue", number: number) => {
    const newValue = localStorage.getItem("counterValue");
    return newValue && newValue !== "undefined" ? JSON.parse(newValue)[key] : number;
  }
  const MAX_VALUE = 8;
  const START_VALUE = 0;

  const [settingsError, setSettingsError] = useState(false);
  const [maxValue, setMaxValue] = useState(getValueFromLS("maxValue", MAX_VALUE));
  const [startValue, setStartValue] = useState(getValueFromLS("startValue", START_VALUE));
  const [counter, setCounter] = useState<number>(startValue);

  const onClickIncHandler = () => {
    const newCount = counter + 1;
    if (newCount <= maxValue) {
      setCounter(newCount)
    }
  }

  const onClickResetHandler = () => {
    setCounter(startValue)
  }

  const setShowSettingsHandle = () => {
    setShowSettings(true)
  }

  const onSetClickHandler = () => {
    if (!settingsError) {
      setShowSettings(false)
      setCounter(startValue)
      localStorage.setItem('counterValue', JSON.stringify({startValue, maxValue}))
    }
  }

  return (
    <div className={s.gridWrapper}>
      {showSettings
        ? (
          <CounterSettings
            maxValue={maxValue}
            startValue={startValue}
            setMaxValue={setMaxValue}
            setStartValue={setStartValue}
            onSetClick={onSetClickHandler}
            hasError={settingsError}
            setHasError={setSettingsError}
          />
        ) : (
          <Counter
            counter={counter}
            onInc={onClickIncHandler}
            onReset={onClickResetHandler}
            maxValue={maxValue}
            startValue={startValue}
            onOpenSettings={setShowSettingsHandle}
          />
        )
      }
    </div>
  )
}

export default App
