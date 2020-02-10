import React from "react";

function SelectPlanet (props) {
    return (
        <select name = "planet" value = {props.value} onChange = {props.onChange}>
        <option value = "mercurio">Mercúrio</option>
        <option value = "venus">Vênus</option>
        <option value = "terra">Terra</option>
        <option value = "marte">Marte</option>
        <option value = "jupiter">Júpiter</option>
        <option value = "saturno">Saturno</option>
        <option value = "urano">Urano</option>
        <option value = "netuno">Netuno</option>
        <option value = "plutao">Plutão</option>
    </select>
    )
}

export default SelectPlanet;