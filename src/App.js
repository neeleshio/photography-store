import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
          <Route path="/" exact component={Dashboard} />
          <Route path="/library" exact component={Library} />
          <Route path="/templates" exact component={Templates} />
          <Route path="/campaign" exact component={Campaign} />
          <Route path="/campaign/list" exact component={CampaignList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
