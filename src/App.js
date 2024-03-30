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
        const itemsResponse = await axios.get('https://6605dd29d92166b2e3c2ec69.mockapi.io/menue');
        setBestellungen((await itemsResponse).data)
        setItems(data);
      }
      fetchData();
    } catch (error) {
      alert('Fehler!');
      console.error(error);
    }
  }, []);

  const essenBuchen = (dateObj, bezeichnung, url, alt) => {
    try {
      const datum = moment(dateObj).local('de').format('DD MMM YYYY');
      const heute = moment(new Date()).local('de').format('DD MMM YYYY');

      if (datum < heute) {
        sweetalert({
          title: "Buchung nicht möglich!",
          text: "Bitte ein Datum in der Zukunft wählen!",
          icon: "error",
      });
      } else {
        sweetalert({
          title: "»" + bezeichnung + "« buchen?",
          text: "Datum: " + datum,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            sweetalert({
              text: "Für wen soll das Menü »" + bezeichnung + "« gebucht werden?",
              content: "input",
              icon: "success",
            }).then(name => {
              if (name === "David" || name === "Irene" || name === "Nicole" || name === "Eirc" || name === "Maren" || name === "Leon" || name === "Gast") {
                const menue = { datum, bezeichnung, url, alt, name };
                axios.post('https://6605dd29d92166b2e3c2ec69.mockapi.io/menue', menue);
                setBestellungen(prev => [...prev, menue]);
              } else {
                sweetalert({
                  text: "Menü konnte nicht gebucht werden!",
                  icon: "error",
                })
              }
            });
          }
        });
      }
    } catch (error) {
      sweetalert('Buchung nicht geklappt...');
      console.error(error);
    }
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
          {planVisible && <Plan bestellungen={bestellungen} setBestellungen={setBestellungen} />}
        </div>
      </div>
    </div>
  );
}

export default App;
