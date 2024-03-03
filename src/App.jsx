import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageOne from "./pages/LandingPageOne";
import { VolunteeringForm } from "./pages/VolunteeringForm";
import Reports from "./pages/Reports";
// import Adopt from "./pages/Adopt";
import { Adopt } from "./pages/Adoption/Adopt";
import { List1 } from "./pages/Adoption/AdoptList/List1";
import { List2 } from "./pages/Adoption/AdoptList/List2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPageOne />} />
          <Route path="/VolunteeringForm" element={<VolunteeringForm />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Adopt" element={<Adopt />} />
          <Route path="/List1" element={<List1 />} />
          <Route path="/List2" element={<List2 />} />
          {/* <Reports/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;