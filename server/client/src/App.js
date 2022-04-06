import {Route,Routes} from "react-router-dom"
import './App.css';
import Create from './components/Create';
import RecordList from './components/RecordList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path="/record" element={<RecordList/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
