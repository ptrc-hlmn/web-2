import './App.css';
import Header from "./Header.js";
import Main from "./Main.js"
import Footer from "./Footer.js"
import Aside from "./Aside.js"
const App =()=> {
  return (
    <div className="App">
   <Header/>
   <Main/>
   <Footer/>
   <Aside/>
    </div>
  );
}

export default App;
