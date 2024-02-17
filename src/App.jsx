import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageOne from "./pages/LandingPageOne";
import { VolunteeringForm } from "./pages/VolunteeringForm";
import Reports from "./pages/Reports";
import Adoptation from "./pages/Adoptation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPageOne />} />
          <Route path="/VolunteeringForm" element={<VolunteeringForm />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Adoptation" element={<Adoptation />} />
          {/* <Reports/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;