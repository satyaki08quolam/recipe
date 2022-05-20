
import './App.css';
import  Pages from "./components/Pages/Pages.jsx"
import {Category} from './components/Pages/Home.jsx';
import {BrowserRouter} from "react-router-dom"
// import Category from './components/category';
// import { Gallery } from './components/dashboard';
// import Recipe from './components/recipe';
// import Search from './components/Search';
// import {BrowserRouter} from 'react-router-dom';
// import Pages from './components/pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    {/* //   <BrowserRouter>
    //   <div>
    //     <Search />
    //     <Gallery />
    //     <Recipe />
    //     <Category />
    //     <Pages />
    //   </div>
    //   </BrowserRouter> */}
    </div>
  );
}


export default App;
