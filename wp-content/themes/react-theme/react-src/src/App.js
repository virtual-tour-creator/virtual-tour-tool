import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PublicLibrary from './components/PublicLibrary';
import EntryPage from './components/EntryPage/EntryPage';
import TourPage from './components/TourPage/TourPage'

import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
	const [editMode, setEditMode] = useState(false);
	const setMode = (mode) => setEditMode(mode);
    return (
        <div className='App'>
            <Route exact path='/' 
            	render={(props) => (
    				<PublicLibrary {...props} editMode={editMode} setEditMode={setMode} />
  				)} 
            />
            <Route exact path='/stop/:entryId' 
            	component={EntryPage} 
            	render={(props) => (
    				<EntryPage {...props} editMode={editMode} setEditMode={setMode}/>
  				)} 
            />
            <Route exact 
            	path='/tour/:tourId'
            	render={(props) => (
    			<TourPage {...props} editMode={editMode} setEditMode={setMode}/>
  				)} 
  			/>
            
            
        </div>
    );
}

export default App;