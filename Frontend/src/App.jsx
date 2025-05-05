import './App.css'
import Home from './views/Home/Home';
import FormularioDeAron from './views/FormularioDeAron/FormularioDeAron';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (    
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/formulario" element={<FormularioDeAron/>}/>
    </Routes>
    );
}

export default App;
