import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"
import { EmployeeContext } from "../employee/EmployeeProvider"

export default () => {
    const { locations } = useContext(LocationContext)

    return (
        <div className="locations">
            {
                locations.map(l => {

                    return <Location key={l.id}
                                     location={l} />
                })
            }
        </div>
    )
}
