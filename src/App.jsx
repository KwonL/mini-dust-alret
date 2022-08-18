import { Routes, Route } from 'react-router-dom'
import SelectBox from './components/SelectBox'
import Tab from './components/Tab'
import Favorite from './pages/Favorites'
import MyPlace from './pages/MyPlace'
import ViewAllPlace from './pages/ViewAllPlace'

function App() {
  return (
    <>
      <SelectBox />
      <Routes>
        <Route path="/" element={<MyPlace />} />
        <Route path="/viewall" element={<ViewAllPlace />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/*" element={<p>Not Found</p>} />
      </Routes>
      <Tab />
    </>
  )
}

export default App
