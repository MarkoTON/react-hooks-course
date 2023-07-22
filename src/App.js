import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

function App() {
  return (
    <div className="App">
      EffectTutorial
      <EffectTutorial /><hr />
      ReducerTutorial
      <ReducerTutorial /><hr />
      StateTutorial
      <StateTutorial /><hr />
      ContextTutorial
      <ContextTutorial /><hr />
      ImperativeHandle
      <ImperativeHandle /><hr />
      RefTutorial
      <RefTutorial /><hr />
      MemoTutorial
      <MemoTutorial /><hr />
      CallBackTutorial
      <CallBackTutorial /><hr />
    </div>
  );
}

export default App;
