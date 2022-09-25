import React from 'react';
import {useState, useEffect} from "react";
import './style/style.css';
import CardPeople from './components/card';
import {database} from "./http/database";
import {getData} from "./components/filtering";
import Filter from "./components/filtering";


function App() {

    const [db, setDb] = useState()

    useEffect(() => {
            database().then(({data}) => {
                setDb(data)
        })
        //   getData().then(r => setDb(r)) - gender\nat ?
    }, [])

    if (!db) return <div>Loading...</div>


    const cards = db.results.map(item => {
        // console.log(item)
        return(
            <CardPeople
                key={item.id.value}
                name={item.name.first + " " + item.name.last}
                gender={item.gender}
                email={item.email}
                date={item.dob.date}
                img={item.picture.large}
                nat={item.nat}
            />
        )
    })

  return (
    <div className="asas">
        <Filter/>
        {cards}
    </div>
  );
}

export default App;