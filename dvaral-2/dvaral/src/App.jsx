import {Routes, Route}  from 'react-router-dom';
import LandingPage from './Pages/user-pages/LandingPage';
import ExplorePage from './Pages/user-pages/ExplorePage';
import UserDashboard from './Pages/user-pages/UserDashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-page" element={<ExplorePage/>} />
        <Route path = "/dashboard" element = {<UserDashboard/>}/>
      </Routes>

    </>
  )
}

export default App;
