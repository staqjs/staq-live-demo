import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { StaqRoutes } from 'staq'

function App() {
  return (
    <Router>
      <StaqRoutes />
    </Router>
  )
}

export default App;
