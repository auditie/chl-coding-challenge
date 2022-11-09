import './App.scss';
import Home from './components/Home/Home';
import UploadPage from './components/UploadPage/UploadPage';

function App() {

  const onFilechange = (files) => {
    console.log(files);
  }

  return (
    <div className="App">
      {/* <Home onFilechange={(files) => onFilechange(files)} /> */}
      <UploadPage />
    </div>
  );
}

export default App;
