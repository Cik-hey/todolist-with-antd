import './App.css';
import TodoList from './features/todo/TodoList';
import PromiseDemo from './features/todo/PromiseDemo';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
