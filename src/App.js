
import logo from './logo.svg';
import React,{ lazy, Suspense, Component } from 'react';
import Dropzone from './Components/Dropzone/Dropzone.js';
import './App.css';
import Upload from './Components/Upload/upload.js';
import Progress from './Components/Progress/Progress.js';

const HelloPerson = lazy(() => import('./Components/HelloPerson.js'))

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Card">
                    <Upload />
                    <Progress />
                    <Dropzone />
                </div>
            </div>
        )
    }
}

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
            <HelloPerson></HelloPerson>
        </Suspense>
        {<HelloPerson name="Sara"/>}
      </header>
    </div>
  );



}

*/


export default App;
