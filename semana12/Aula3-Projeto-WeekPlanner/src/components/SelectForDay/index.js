import React from 'react';

export function SelectedDay (props) {
    return (
        <select name="day" value={props.value} onChange={props.onChange}>
            <option value="" selected="selected">Escolha um dia</option>
            <option value="Segunda">Segunda</option>
            <option value="Terça">Terça</option>
            <option value="Quarta">Quarta</option>
            <option value="Quinta">Quinta</option>
            <option value="Sexta">Sexta</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
        </select>
    )
}
