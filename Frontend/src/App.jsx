import './App.css'
import Home from './views/Home/Home';
import FormularioDeAron from './views/FormularioDeAron/FormularioDeAron';
import { Route, Routes } from 'react-router-dom';
import NotFound from './views/NotFountd/NotFound';
import Productos from './views/Productos/Productos';


function App() {
    return (    
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/formulario" element={<FormularioDeAron />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
    );
}

export default App;
