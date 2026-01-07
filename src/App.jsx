import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [view, setView] = useState('home');

  return (
    <>
      {view === 'home' ? (
        <Home onStart={() => setView('questions')} />
      ) : (
        <div className="p-10">
           <button onClick={() => setView('home')} className="bg-gray-200 p-2 mb-4">Volver</button>
           <QuestionsCard />
        </div>
      )}
    </>
  );
} 

export default App;