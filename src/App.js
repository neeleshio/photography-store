import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Layout from './components/Layout/Layout'

//Pages
import Dashboard from './pages/Dashboard/Dashboard'
import Library from './pages/Library/Library'
import Templates from './pages/Templates/Templates'
import Campaign from './pages/Campaign/Campaign'
import CampaignList from './pages/Campaign/CampaignList'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Dashboard path="/" exact component={Dashboard} />
          <Library path="/library" exact component={Library} />
          <Templates path="/templates" exact component={Templates} />
          <Campaign path="/campaign" exact component={Campaign} />
          <CampaignList path="/campaign/list" exact component={CampaignList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
