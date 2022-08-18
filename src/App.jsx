import { Routes, Route } from 'react-router-dom'
import Favorite from './pages/Favorites'
import MyPlace from './pages/MyPlace'
import ViewAllPlace from './pages/ViewAllPlace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<MyPlace />} />
      <Route path="/viewall" element={<ViewAllPlace />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/*" element={<p>Not Found</p>} />
    </Routes>
  )
}

export default App
