import React, { useState, useEffect } from "react";
import data from '../parkingi.json'

function Filter(props) {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        setItems(data)
    }, [])

    return (
        <div>
            <form style={{ display: 'flex' }}>
                <input style={{ flex: '10', padding: '5px' }}
                    type="text"
                    name="filter"
                    value={filter}
                    placeholder="Filtruj ..."
                    onChange={(e) => setFilter(e.target.value)}
                />
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th"><button onClick={() => props.sortBy('street')}>Ulica</button></th>
                        <th className="th">Liczba miejsc</th>
                        <th className="th">Miejsca dla niepełnosprawnych</th>
                        <th className="th">Czy opłacone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((p, id) => {
                            if (filter.length !== 0) {
                                if (p.properties.street.toLowerCase().startsWith(filter.toLowerCase())) {
                                    const str = (p.properties.paid === true) ? "Tak" : "Nie"
                                    return <tr key={id} style={getStyle}><td className="td">{p.properties.street}</td><td className="td">{p.properties.spots}</td><td className="td">{p.properties.handicappedSpots}</td><td className="td">{str}</td>
                                        <td><button style={editStyle}>Edit</button></td>
                                        <td><button onClick style={btnStyle}>x</button></td>
                                    </tr>
                                } else {
                                    return null
                                }
                            }
                            const str = (p.properties.paid === true) ? "Tak" : "Nie"
                            return <>
                                <tr key={id} style={getStyle}><td className="td">{p.properties.street}</td><td className="td">{p.properties.spots}</td> <td className="td">{p.properties.handicappedSpots}</td><td className="td">{str}</td>
                                    <td><button style={editStyle}>Edit</button></td>
                                    <td><button style={btnStyle}>X</button></td>
                                </tr>
                            </>
                        }
                        )}
                </tbody>
            </table>
        </div>
    )
}
const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "3px 10px",
    cursor: "pointer",
    float: "right",
};
const editStyle = {
    background: "#0eb039",
    color: "#fff",
    border: "none",
    padding: "3px 10px",
    cursor: "pointer",
    float: "right",
};

const getStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    fontWeight: 'bold',
    fontSize: '15px'
};

const hoverStyle = {
    background: "red",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    fontWeight: 'bold',
    fontSize: '20px'
};


export default Filter

