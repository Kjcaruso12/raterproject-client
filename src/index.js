import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GamerRater } from "./components/GamerRater"

ReactDOM.render(
    <Router>
      <GamerRater />
    </Router>,
  document.getElementById("root")
)

