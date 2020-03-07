import React from 'react'
import { Box, Container, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { NavBar } from './NavBar'


const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: '60px',
        [theme.breakpoints.down('md')]: {
            marginTop: '110px',
        }
    }
}))

export const Layout: React.FC = ({
    children
}) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <NavBar/>
            <Container
                maxWidth='md'
                className={classes.container}
            >
                {children}
            </Container>
        </React.Fragment>
    )
}
