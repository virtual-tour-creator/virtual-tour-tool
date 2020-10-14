import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PublicLibrary from './components/PublicLibrary';
import EntryPage from './components/EntryPage/EntryPage';
import TourPage from './components/TourPage/TourPage'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className='App'>
            <Route exact path='/' component={PublicLibrary} />
            <Route exact path='/entry/:entryId' component={EntryPage} />
            <Route exact path='/tour' component={TourPage} />
            
            
        </div>
    );
}

export default App;