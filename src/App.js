import React from "react";
import Header from "./components/Header";
import Plan from "./components/Plan";
import data from './data/db.json';
import Content from "./components/Content";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/de' 

function App() {
  const [items, setItems] = React.useState([]);
  const [date, setDate] = React.useState(new Date());
  const [planVisible, setPlanVisible] = React.useState(false);
  const [contentVisible, setContentVisible] = React.useState(true);

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
      const buchung = moment(obj).local('de').format('DD MMM YYYY');
      axios.post('https://6605dd29d92166b2e3c2ec69.mockapi.io/date', buchung);
      alert("Buchung erfolgreich: " + buchung);
    } catch (error) {
      alert('Buchung nicht geklappt...');
      console.error(error);
    }
  }

  const selectBezeichnung = (bez) => {
    axios.post('https://6605dd29d92166b2e3c2ec69.mockapi.io/menue', bez);
  }

  return (
    <div>
      <Header
        onClickPlan={(visible) => setPlanVisible(visible)}
        onClickContent={(visible) => setContentVisible(visible)}
      />
      <div className="wrapper">
        <div className="content">
          {contentVisible && <Content items={items} selectDate={selectDate} selectBezeichnung={selectBezeichnung} />}
          {planVisible && <Plan />}
        </div>
      </div>
    </div>
  );
}

export default App;
