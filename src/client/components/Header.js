import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'

var paperStyle = {background: '#00bcd4', height: '50vh', color: 'white'};

const Header = () => (
    <div>
    <AppBar 
        showMenuIconButton={false}
    />

    <Paper style={paperStyle}>
                    
    </Paper>
    </div>
)

export default Header
