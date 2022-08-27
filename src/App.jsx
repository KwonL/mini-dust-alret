import { Routes, Route, useLocation } from 'react-router-dom'
import SelectBox from './components/SelectBox'
import FetchData from './components/FetchData'
import Tab from './components/Tab'
import Favorites from './pages/Favorites'
import MyPlace from './pages/MyPlace'
import ViewAllPlace from './pages/ViewAllPlace'
import Container from 'react-bootstrap/Container'
import './utils/addLocalStoroge'

function App() {
  const location = useLocation().pathname

  return (
    <Container>
      <FetchData />
      <SelectBox />
      <Routes>
        <Route default path="/" element={<MyPlace />} />
        <Route path="/viewall" element={<ViewAllPlace />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/*" element={<p>Not Found</p>} />
      </Routes>
      <Tab isActive={location} />
    </Container>
  )
}

export default App
