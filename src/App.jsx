import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import LandingPageOne from "./pages/LandingPageOne";
import { SignUp } from "./pages/SignUp";

function App() {

  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={
        // eslint-disable-next-line react/jsx-no-undef
          <LandingPageOne />
          // <SignIn/>
        } />
        <Route path="/" element={<LandingPageOne />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        

      </Route>
    </Routes>
  </BrowserRouter></>
  )
}

export default App
