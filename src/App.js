import './App.css';
import Button from './components/Button';
import logo from './logo.svg';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello React! 👋</h1>
      <Button  text='Enviar'/>
      <Button  text='Borrar' clase='frame'/>
      <Button clase='solid-green' />
      <Button />
      <Button text='Googbye'/>
      <div className='container'>
        <img src={logo} alt="logotipo React"/>
        <Counter/>
        <Counter text= '👎'/>
      </div>
    </div>
  );
}

export default App;
