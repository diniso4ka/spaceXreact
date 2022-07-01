import './null.css'
import './App.scss';


import Header from './components/Header';
import Content from './components/Content';


function App() {
  return (
    <div className="App">

      <div className='wrapper'>
        <div className='inner-wrapper'>
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
