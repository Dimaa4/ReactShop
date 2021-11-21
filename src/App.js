
import './App.scss';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
function App() {
  return (

    <div>
      <Drawer/>
      <div className="conteiner">
        <Header/>
        <hr />
        <div className="content">
          <div className="contentHeader">
            <h1>All goods</h1>
              <input type="text" placeholder="Search..." className="searchInput"></input>
          </div>
          <div className="cards">

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

          </div>


        </div>
      </div>
    </div>
  );
}


export default App;
