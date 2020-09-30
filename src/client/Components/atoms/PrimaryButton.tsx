import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    'button': {
        fontSize: 16,
        height: 48,
        marginButton: 16,
    }
})

const PrimaryButton = (props: any) => {
    const classes = useStyles();
    return (
        <Button className={classes.button} variant={props.variant} color={props.color} onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
}

export default PrimaryButton;