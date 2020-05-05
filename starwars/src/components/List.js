import React, { useEffect, useState } from "react"
import Character from './Character.js'
import axios from "axios"


export default function List() {
    const [person, setPerson] = useState([])
    let pageUrl = new URLSearchParams(window.location.search).get('page')
    let page = parseInt(pageUrl)

    if (page < 1) { page = 1 }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => {
                console.log(response.data.results)
                setPerson(response.data.results)
            })
            .catch(error => {
                console.log("ERROR: ", error)
            })
    }, [])

    return (
        <div className="charContainer">
            <a href={"?page=" + (page - 1)} className="left">Prev Page</a>
            <a className="curPage">Page {page}</a>
            <a href={"?page=" + (page + 1)} className="right">Next Page</a>
            <div className="characterList">
            {person.map(character => {
                return (
                    <Character
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        type={character.type}
                        gender={character.gender}
                        origin={character.origin.name}
                        location={character.location.name}
                        image={character.image}
                        episode={character.episode}
                        url={character.url}
                        created={character.created}
                        />
                )
            })}
            </div>
        </div>
    )
}