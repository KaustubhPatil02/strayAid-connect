import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import LandingPageOne from "./pages/LandingPageOne";
import { SignUp } from "./pages/SignUp";
import { VolunteeringForm } from "./pages/VolunteeringForm";
import Reports from "./pages/Reports";
// import { Report } from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPageOne />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/VolunteeringForm" element={<VolunteeringForm />} />
          <Route path="/reporting" element={<Reports />} />
          {/* <Reports/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;