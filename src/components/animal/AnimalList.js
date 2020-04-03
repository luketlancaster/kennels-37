import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"
import { useEffect } from "react"
import { useState } from "react"

export default (props) => {
    const { animals, searchTerm, setAnimals } = useContext(AnimalContext)
    const [ filteredAnimals, setFiltered ] = useState([])

    useEffect(() => {
        const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerm))
        setFiltered(subset)
    }, [searchTerm])

    useEffect(() => {
        setFiltered(animals)
    }, [animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => props.history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}
