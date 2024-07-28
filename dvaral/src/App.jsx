import {Routes, Route}  from 'react-router-dom';
import LandingPage from './assets/user-pages/LandingPage';
import ExplorePage from './assets/user-pages/ExplorePage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-page" element={<ExplorePage/>} />    
      </Routes>

    </>
  )
}

export default App
