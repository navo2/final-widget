import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SlideA from './Final/slidB';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/final" element={<SlideA />} />
    </Routes>
  </Router>
  );
}

export default App;
