import "./App.css";
import { Array } from "./react/array";
import { ArrayObject } from "./react/arrayObject";
import { ChildrenComponent } from "./react/children";
import { Counter } from "./react/counter";
import { Event } from "./react/event";
import Form from "./react/form";
import { ImmerCounter } from "./react/immer";
import { ListComponent } from "./react/list";
import { NestedObject } from "./react/nestedObject";
import { Object } from "./react/object";
import PropGreeting from "./react/prop";
import ReactHookForm from "./react/reacthookform";
import ParentComponent from "./react/shareStateProp";
import { Count, CounterProvider } from "./react/shareStatecontext";
import StateCounter from "./react/state";
import UseEffectCounter from "./react/useEffect";
import UseStateCounter from "./react/useState";
import UseStateUseRef from "./react/useStateuseRef";
import ZodForm from "./react/zod";

function App() {
  return (
    <>
      <Counter />
      <ListComponent />
      <Event />
      <PropGreeting name="React" />
      <StateCounter />
      <UseStateCounter />
      <ChildrenComponent>
        <p>This is my Children Component</p>
      </ChildrenComponent>
      <Object />
      <NestedObject />
      <Array />
      <ArrayObject />
      <ImmerCounter />
      <ParentComponent />
      <CounterProvider>
        <Count />
      </CounterProvider>
      <Form />
      <ReactHookForm />
      <ZodForm />
      <UseEffectCounter />
      <UseStateUseRef />
    </>
  );
}

export default App;
