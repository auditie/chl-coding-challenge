import './App.scss';
import Home from './components/Home/Home';

function App() {

  const onFilechange = (files) => {
    console.log(files);
  }

  return (
    <div className="App">
      <Home onFilechange={(files) => onFilechange(files)} />
    </div>
  );
}

export default App;
