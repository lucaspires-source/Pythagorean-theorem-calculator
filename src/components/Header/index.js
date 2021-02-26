import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
const Header = () => {
    return (
        <section>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" color="inherit">
                        Calculadora do Pitágoras
                    </Typography>
                </Toolbar>
            </AppBar>
        </section>
    )
}

export default Header
