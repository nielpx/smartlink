
import './App.css';
import Content from './content.js';
import Navtop from './navbar.js';
import Sidebar from './Sidebar.js';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div style={
        {
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }
      }>
        <Navtop />
        <Content/>
      </div>
      
    </div>
  );
}

export default App;
