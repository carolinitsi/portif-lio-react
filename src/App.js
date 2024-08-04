import './App.css';
import React, {useState} from 'react';
import './App.css';
import MyRoutes from './MyRoutes';
import { ThemeProvider } from 'styled-components';
import Switcher from './components/Switcher/Switcher';
import {Global} from './styles/Global';
import { temaClaro, temaEscuro,ButtonTheme } from '../src/styles/Temas';

function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    console.log(tema);
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
            <Global/>
            <ButtonTheme onClick={toggleTema}>
              <p>Alterar tema</p>
              <Switcher tema={tema}/>
            </ButtonTheme>
            <MyRoutes theme={tema}/>
      </ThemeProvider>
  );
}

export default App;
