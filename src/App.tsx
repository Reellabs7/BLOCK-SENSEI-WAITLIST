import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SuccessPage from "./SuccessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} /> {/* Your current form page */}
        <Route path='/success' element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
