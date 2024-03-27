import React from "react";
import Header from "./components/Header";
import Plan from "./components/Plan";
import data from './data/db.json';
import Content from "./components/Content";

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
      <Header onClickPlan={(plan) => setPlanVisible(plan)} onClickContent={(content) => setContentVisible(content)} />
      <div className="wrapper">
        <div className="content">
          {contentVisible && <Content items={items} selectDate={selectDate} />}
          {planVisible && <Plan />}
        </div>
      </div>
    </div>
  );
}

export default App;
