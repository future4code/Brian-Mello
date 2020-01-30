import React from 'react';
import { StyledSelect } from '../../style/styled'

export function SelectedDay (props) {
    return (
        <StyledSelect name="day" value={props.value} onChange={props.onChange}>
            <option value="" selected="selected">Escolha um dia</option>
            <option value="Segunda">Monday</option>
            <option value="Terça">Terça</option>
            <option value="Quarta">Quarta</option>
            <option value="Quinta">Quinta</option>
            <option value="Sexta">Sexta</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
        </StyledSelect>
    )
}

