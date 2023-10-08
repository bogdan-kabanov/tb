import { Link, Route, Routes } from 'react-router-dom'
import './App.scss'
import Content from './components/Content/Content'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import Nav from './components/Nav/Nav'
import Main from './components/pages/Main/Main'
import Contact from './components/pages/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className='Wrapper Theme_White'>
      <Content>
        <LeftSidebar />
        <header>
          <Nav>
            <Link className='NavLink' to="/contact">Контакты</Link>
            <Link className='NavLink' to="/login">Авторизоваться</Link>
            <Link className='NavLink' to="/">Главная</Link>
          </Nav>
        </header>
        <div className="Content_Wrapper">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Content>
      <Footer />
    </div>
  )
}

export default App
