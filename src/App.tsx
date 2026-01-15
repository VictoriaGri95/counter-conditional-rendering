import s from './App.module.scss'
import {Counter} from "./components/counter/Counter.tsx";
import {useEffect, useState} from "react";
import {
  CounterSettings
} from "./components/counterSettings/CounterSettings.tsx";

function App() {
  const [showSettings, setShowSettings] = useState(false)
  // const [maxValue, setMaxValue] = useState(8);
  // const [startValue, setStartValue] = useState(0);

  const [settingsError, setSettingsError] = useState(false);
  const [maxValue, setMaxValue] = useState(() => {
    const newValue = localStorage.getItem("counterValue");
    return newValue && newValue !== "undefined" ? JSON.parse(newValue).maxValue : 8;
  });
  const [startValue, setStartValue] = useState(() => {
    const newValue = localStorage.getItem("counterValue");
    return newValue && newValue !== "undefined" ? JSON.parse(newValue).startValue : 0;
  });
  const [counter, setCounter] = useState<number>(startValue);

  // useEffect(() => {
  //   const valueAsString = localStorage.getItem('counterValue')
  //     if (valueAsString) {
  //       const newValue =  JSON.parse(valueAsString)
  //       setCounter(newValue)
  //     }
  // }, []);

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify({startValue, maxValue}))
  }, [startValue, maxValue]);

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
