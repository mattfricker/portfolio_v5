import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'
import cycle from '../../../assets/images/cycle.png'
import logo from '../../../assets/images/logo.png'

var paperStyle = {background: '#00bcd4', height: '80vh', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column'};
var imgStyle = {width: '650px', height: '300px'};
var logoStyle = {width: '40px', height: '31px'}

const Header = () => (
    <div>
    <AppBar 
        showMenuIconButton={false}
        title={<img style={logoStyle} src={logo}></img>}
    />

    <Paper style={paperStyle}>
        <img style={imgStyle} src={cycle}></img>
        <h2>Problem solving is my passion.</h2>
    </Paper>
    </div>
)

export default Header
