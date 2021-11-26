import React, { useState, useEffect, useReducer } from "react";
import { List } from "./components/List";
import { Container, Button } from "@mui/material";
import { AppBar } from "./components/AppBar";
import "./App.css";

interface State {
  triggerRerender: number;
  showCake: boolean;
}
interface Action {
  type: string;
}

const initialState: State = {
  triggerRerender: 0,
  showCake: true,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "RERENDER":
      return {
        ...state,
        triggerRerender: state.triggerRerender + 1,
      };
    case "TOGGLE_CAKE":
      return {
        ...state,
        showCake: !state.showCake,
      };
    default:
      return state;
  }
};

const App = () => {
  // const [triggerRerender, setTriggerRerender] = useState(0);
  // const [showCake, setShowCake] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setInterval(() => {
      // setTriggerRerender((prev) => prev + 1);
      dispatch({ type: "RERENDER" });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <AppBar />
      <Container>
        <List
          showCake={state.showCake}
          triggerRerender={state.triggerRerender}
        />
      </Container>
      <Button
        onClick={() => {
          // setShowCake((prev) => !prev);
          dispatch({ type: "TOGGLE_CAKE" });
        }}
      >
        Toggle cake
      </Button>
    </div>
  );
};

export default App;
