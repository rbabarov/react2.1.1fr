import React, { useState } from 'react';
import './stamp.css';
import './App.css';
import allCard from './components/DataCard';
import Toolbar from './components/Toolbar';
import ProjectList from './components/ProjectList';
const filters = ["All", "Websites", "Flayers", "Business Cards"];

function App() {
  const [state, setState] = useState({chosen: 'All'});
  const choiceState = (evn) => {
    setState({chosen: evn});
  }
  function selectData() {
    return (state.chosen === 'All' ? allCard : allCard.filter((item) => item.category === state.chosen)); 
  }
  return (
    <div className="App">
      <Toolbar
      all = {filters}
      chosen = {state.chosen}
      onSelectFilter={(evn) => choiceState(evn)}/> 
      <ProjectList data={selectData()}/>
    </div>
  );
}

export default App;
