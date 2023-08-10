import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Signup from './Signup'
import Login from './Login'
import Search from './Search'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='services' element={<Services />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='login' element={<Login />}/>
          <Route path='search' element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;