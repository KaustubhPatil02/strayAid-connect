import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignUpLogin } from "./pages/SingnUpLogin";
import LandingPageOne from "./pages/LandingPageOne";

function App() {

  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={
        // eslint-disable-next-line react/jsx-no-undef
          <LandingPageOne />
        } />
        <Route path="SignUpORLogin" element={<SignUpLogin />} />
        <Route path="land" element={<LandingPageOne />} />
        

      </Route>
    </Routes>
  </BrowserRouter></>
  )
}

export default App
