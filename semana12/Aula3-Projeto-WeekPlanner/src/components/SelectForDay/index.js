import React from 'react';
import { StyledSelect } from '../../style/styled'

export function SelectedDay (props) {
    return (
        <StyledSelect name="day" value={props.value} onChange={props.onChange}>
            <option value="" selected="selected">Change a day</option>
            <option value="Segunda">Monday</option>
            <option value="Terça">Tuesday</option>
            <option value="Quarta">Wednesday</option>
            <option value="Quinta">Thursday</option>
            <option value="Sexta">Friday</option>
            <option value="Sábado">Saturday</option>
            <option value="Domingo">Sunday</option>
        </StyledSelect>
    )
}

