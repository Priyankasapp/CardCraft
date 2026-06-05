import {Routes,Route} from 'react-router-dom';
import Home from "../pages/Home";
import Templates from "../pages/Templates";
import Editor from "../pages/Editor";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
