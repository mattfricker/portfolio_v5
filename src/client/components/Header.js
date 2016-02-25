import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'
import Github from 'material-ui/lib/svg-icons/';
import Colors from 'material-ui/lib/styles/colors';

var paperStyle = {background: 'red', height: '90vh'}

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
