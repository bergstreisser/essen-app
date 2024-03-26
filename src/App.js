import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from './data/db.json';
import Content from "./components/Content";

function App() {
  const [items, setItems] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date());

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

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Content
            items={items}
            startDate={startDate}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
