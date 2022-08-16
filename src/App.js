import { Route, Routes } from 'react-router-dom'; 
import CustomPages from './pages/CustomPages';
import CustomPageFilter from './pages/CustomPageFilters';
import './assets/css/styles.css'

function App() {
  return ( 
    <>
      <Routes>
        <Route path={`/admin/custom-pages`} element={<CustomPages />} />
        <Route path={`/admin/custom-pages/:tableName`} element={<CustomPageFilter />} /> 
      </Routes>
    </>
  );
}

export default App;
