import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
import Navbar from './components/Navbar';
import Update from './pages/Update'
import WorkoutForm from './components/WorkoutForm';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            {/* Create */}
            <Route path='/workouts/new' element={<WorkoutForm />} />
            {/* <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            /> */}
            {/* <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            /> */}
            {/* Update */}
            <Route path='/workouts/:id/edit' element={<Update />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
