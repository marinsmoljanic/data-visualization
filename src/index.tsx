import * as React from 'react';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { render } from 'react-dom';
import {Home, Foo, Bar} from './Pages';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <div className="body flex">
        <BrowserRouter>
          <div className="w-80 h-screen bg-red-400 bg-gray-200">
            <nav className="flex flex-col gap-y-8">
              <Link to="/">Home</Link>
              <Link to="/foo">Foo</Link>
              <Link to="/bar">Bar</Link>
            </nav>
          </div>
          <div className="border-4 border-blue-600 w-full">
            <Routes>
              <Route path="/"    element={<Home/>} />
              <Route path="/foo" element={<Foo/>}  />
              <Route path="/bar" element={<Bar/>}  />

              <Route path='/' element={<Home/>} />
            </Routes>
          </div>  
        </BrowserRouter>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
