import React, { Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {StyledSelect} from '../selectDevice/styled';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export function SelectOrder(props) {
    const classes = useStyles()
    return(
        <Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel id="selectLabel">Selecione uma Ordem</InputLabel>
                <StyledSelect labelId="selectLabel" name="order" value={props.value} onChange={props.onChange}>
                    <MenuItem value="crescente">Crescente</MenuItem>
                    <MenuItem value="decrescente">Decrescente</MenuItem>
                </StyledSelect>
            </FormControl>
        </Fragment>
    )
}

export default SelectOrder;