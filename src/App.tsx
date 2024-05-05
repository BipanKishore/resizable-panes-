import React from 'react';
import './App.css';
import { ResizableDemo } from './components/resizable-demo';
import 'tailwindcss/base.css'
import Header from './components/header';

function App() {

  return (
    <div className='max-w-screen-lg mx-auto' >

      <Header />
      <div >
        <ResizableDemo />
      </div>

    </div>
  );
}

export default App;
