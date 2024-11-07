import './App.css';
import AboutUs from './components.js/AboutMe';
import { Error } from './components.js/Error';
import Header from './components.js/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components.js/Home';
import Sidebar from './components.js/Sidebar';
import { createContext, useState } from 'react';
import { ErrorBoundary } from './components.js/ErrorBoundary';

export const Context = createContext();

function App() {
  const [crudeMode, setCrudeMode] = useState('viewAll');
  return (
    <Router>

        <Context.Provider value={{ crudeMode, setCrudeMode }}>
          <ErrorBoundary>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/aboutme' element={<AboutUs />} />
              <Route path='*' element={<Error />} />
            </Routes>
            </Layout>
          </ErrorBoundary>
        </Context.Provider>
    </Router>
  );
}

const Layout = ({ children }) => {
  return (
    <div className="app-container flex flex-col min-h-screen bg-gray-100">
      <Header className="shadow-md z-10" />
      <div className="flex flex-row flex-1">
        <Sidebar className="shadow-lg bg-white min-w-[240px] w-64 p-6" />
        <main className="flex-1 ml-0 lg:ml-10 xl:ml-10 p-6 bg-white shadow-md rounded-lg">
          {children}
        </main>
      </div>
    </div>
  );
};

export default App;
