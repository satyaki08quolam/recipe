
import './App.css';
import { Gallery } from './components/dashboard';
import Recipe from './components/recipe';

function App() {
  return (
    <div className="App">
      <div>
        <Gallery />
        <Recipe />
      </div>
    </div>
  );
}

export default App;
