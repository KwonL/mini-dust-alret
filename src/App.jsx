import { Routes, Route, useLocation } from 'react-router-dom'
import SelectBox from './components/SelectBox'
import Tab from './components/Tab'
import Favorite from './pages/Favorites'
import MyPlace from './pages/MyPlace'
import ViewAllPlace from './pages/ViewAllPlace'
import Container from 'react-bootstrap/Container'
import './utils/addLocalStoroge'

function App() {
  const location = useLocation().pathname

  return (
    <Container>
      <SelectBox />
      <Routes>
        <Route default path="/" element={<MyPlace />} />
        <Route path="/viewall" element={<ViewAllPlace />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/*" element={<p>Not Found</p>} />
      </Routes>
      <Tab isActive={location} />
    </Container>
  )
}

export default App
