import './App.css'
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import Users from './components/Users';

function App() {
  return (<>
    <Counter />
    <Users />
  </>
  )
}

export default App