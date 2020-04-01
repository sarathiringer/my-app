

import React,{ Component } from 'react';
import './App.css';
import Upload from './Components/Upload/upload.js';
import Progress from './Components/Progress/Progress.js'; // Never used simply because I didn't get it to work very well. 
import Display from './Components/Display/display.js';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Card">
                    <Upload />
                </div>
                <div className="Display">
                    <Display />
                </div>
            </div>
        )
    }
}


export default App;
