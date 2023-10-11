import { Link, Route, Routes } from 'react-router-dom'

import './App.scss'

import Content from '@components/Content/Content'
import Nav from '@components/Nav/Nav'
import Main from '@components/pages/Main/Main'
import Contact from '@components/pages/Contact/Contact'
import Footer from '@components/Footer/Footer'

import { useDispatch } from 'react-redux';
import { removeClassName } from '@/store/StyleClass'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'

function App() {
  const dispatch = useDispatch();
  const removeWhiteColor = () => dispatch(removeClassName({
    nameArray: 'Nav',
    classArray: ['NavLight']
  }))

  function handleClickLink() {
    document.body.style.overflow = 'auto'
    removeWhiteColor()
  }

  return (
    <div className='Wrapper Theme_White'>
      <Content>
        <LeftSidebar />
        <header>
          <Nav>
            <Link className='NavLink' to="/contact" onClick={handleClickLink}>Контакты</Link>
            <Link className='NavLink' to="/login" onClick={handleClickLink}>Авторизоваться</Link>
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
