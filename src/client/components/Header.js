import React from 'react'
import styleable from 'react-styleable'

import AppBar from 'material-ui/lib/app-bar'
import Paper from 'material-ui/lib/paper'
import logo from '../../../assets/images/logo.png'

import css from '../styles/components/header.css';

const Header = ({ css }) => (
    <div className={css.root}>
    <AppBar 
        showMenuIconButton={false}
        title={<img className={css.logo} src={logo}></img>}
    />


    </div>
)

export default styleable(css) (Header)
