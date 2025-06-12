import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuestLayout from "./layouts/GuestLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"

function App() {


  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<GuestLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />

          </Route>

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
