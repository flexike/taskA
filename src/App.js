import React from 'react'
import {useState, useEffect} from "react";
import './style.css'
import CardPeople from './card'
import {database} from "./database";

function App() {
    const [db, setDb] = useState()


    useEffect(() => {
            database().then(({data}) => {
                setDb(data)
        })
    }, [])

    if (!db) return <div>Loading...</div>


    const cards = db.results.map(item => {
        console.log(item)
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
        {cards}
    </div>
  );
}

export default App;