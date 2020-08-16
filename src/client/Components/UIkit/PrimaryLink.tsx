import React from 'react';
import { Link } from '@material-ui/core';

const PrimaryLink = (props: any) => {
    return (
        <Link component="button" variant="body2" onClick={() => props.onClick()}>
            {props.text}
        </Link>
    )
}

export default PrimaryLink;