import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from './data/db.json';
import Content from "./components/Content";

function App() {
  const [items, setItems] = React.useState([]);
  const [date, setDate] = React.useState({});

  React.useEffect(() => {
    try {
      async function fetchData() {
        setItems(data);
      }
      fetchData();
    } catch (error) {
      alert('Fehler!');
      console.error(error);
    }
  }, []);

  const selectDate = (obj) => {
    try {
      //schreiben in MockApi
      setDate(obj);
      alert(obj);
    } catch (error) {
      alert('hinzufügen nicht geklappt...');
      console.error(error);
    }

  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Content
            items={items}
            selectDate={selectDate}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
