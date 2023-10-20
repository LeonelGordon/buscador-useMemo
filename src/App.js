import { useState } from "react";
import Searchbar from "./components/Searchbar";
import styled from "styled-components";

const Button= styled.button `
      padding: 10px; 
      border-radius: 5px;
      border:none;
      background-color: white;
      border: solid 1px #ccc;
      cursor: pointer; 

      &: hover {
        background-color: grey;
      }
 `;


const people= [
  {
    id: "People-01",
    title: "Leonel Gordón",
  },
  {
    id: "People-02",
    title: "Mavi Castronuovo",
  },
  {
    id: "People-03",
    title: "Ramiro Diz",
  },
  {
    id: "People-04",
    title: "Post Malone",
  },
  {
    id: "People-05",
    title: "Mac Miller",
  },
];

const calendar = [
  {
    id: "Calendar-01",
    title:"Sesión Ingles"
  },
  {
    id: "Calendar-02",
    title:"Medico"
  },
  {
    id: "Calendar-03",
    title:"Cumpleaños Post"
  },
  {
    id: "Calendar-04",
    title:"Gym"
  },
  {
    id: "Calendar-05",
    title:"Dentista"
  },
];
const email = [
  {
    id: "Email-01",
    title:"Reporte de resultados"
  },
  {
    id: "Email-02",
    title:"Requisitos para cambio"
  },
  {
    id: "Email-03",
    title:"Estatus de funcionalidad"
  },
  {
    id: "Email-04",
    title:"Proximos eventos"
  },
  {
    id: "Email-05",
    title:"Participar en encuesta"
  },
];

function App() {
  const [data, setData] = useState ([...people, ...calendar, ...email]);

  const [selection, setSelection] = useState (null);
  const [currentOption, setCurrentOption] = useState ('all'); 

  function handleClick(e) {
    const location= e.target.name;

    switch(location) {
      case 'all':
            setData([...people, ...calendar, ...email]);
            setCurrentOption('all');
            break;

        case 'people':
            setData([...people]);
            setCurrentOption('people');
            break;

        case 'calendar':
          setData([...calendar]);
          setCurrentOption('calendar');
          break;

        case 'emails':
          setData([...email]);
          setCurrentOption('emails');
          break;
    }
  }
  function handleOnItemSelected(item) {
    setSelection(item);
  }
  return ( 
    <div>
          <Button onClick={handleClick} name= "all" > All </Button>
          <Button onClick={handleClick} name= "people" > People </Button>
          <Button onClick={handleClick} name= "calendar" > Calendar </Button>
          <Button onClick={handleClick} name= "emails" > Emails </Button>
          {selection ? <div>You selected: {selection.title} </div> : ''}
          <Searchbar items={data} onItemSelected= {handleOnItemSelected}/>
    </div>
  );
};

export default App;
