import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {Toaster} from "react-hot-toast"

function App() {


  
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
  console.log(GOOGLE_CLIENT_ID)

  return (
    <>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
          <Toaster></Toaster>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
