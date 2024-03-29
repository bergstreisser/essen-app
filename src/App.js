import React from "react";
import Header from "./components/Header";
import Plan from "./components/Plan";
import data from './data/db.json';
import Content from "./components/Content";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/de'
import sweetalert from 'sweetalert';

function App() {
  const [items, setItems] = React.useState([]);
  const [bestellungen, setBestellungen] = React.useState([]);
  const [planVisible, setPlanVisible] = React.useState(false);
  const [contentVisible, setContentVisible] = React.useState(true);

  React.useEffect(() => {
    try {
      async function fetchData() {
        const itemsResponse = axios.get('https://6605dd29d92166b2e3c2ec69.mockapi.io/menue');
        setBestellungen((await itemsResponse).data)
        setItems(data);
      }
      fetchData();
    } catch (error) {
      alert('Fehler!');
      console.error(error);
    }
  }, []);

  const essenBuchen = (dateObj, bez) => {
    try {
      const datum = moment(dateObj).local('de').format('DD MMM YYYY');
      const heute = moment(new Date()).local('de').format('DD MMM YYYY');
      const menue = { datum, bez };

      if (datum < heute) {
        sweetalert({
          title: "Buchung nicht möglich!",
          text: "Bitte ein Datum in der Zukunft wählen!",
          icon: "error",
      });
      } else {
        sweetalert({
          title: "»" + bez + "« buchen?",
          text: "Datum: " + datum,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            sweetalert(bez + " für den " + datum + " gebucht", {
              icon: "success",
            });
            axios.post('https://6605dd29d92166b2e3c2ec69.mockapi.io/menue', menue);
          }
        });
      }
    } catch (error) {
      sweetalert('Buchung nicht geklappt...');
      console.error(error);
    }
  }

  const getItems = () => {
    
  }

  return (
    <div>
      <Header
        onClickPlan={(visible) => setPlanVisible(visible)}
        onClickContent={(visible) => setContentVisible(visible)}
      />
      <div className="wrapper">
        <div className="content">
          {contentVisible && <Content items={items} essenBuchen={essenBuchen} />}
          {planVisible && <Plan bestellungen={bestellungen} />}
        </div>
      </div>
    </div>
  );
}

export default App;
