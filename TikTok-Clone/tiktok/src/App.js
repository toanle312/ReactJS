
import Content from './Content';
import {ThemeContext} from './ThemeContext';
import { useContext } from 'react';
import './App.css';


function App() {
  const context = useContext(ThemeContext);
  return (

      <div style={{padding: "20px"}}>
        <button onClick={context.toogleTheme}>Toggle Theme</button>
        <Content/>
      </div>
  )
}

export default App;
