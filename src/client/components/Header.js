import React from 'react'
import styleable from 'react-styleable'

import AppBar from 'material-ui/lib/app-bar'
import RaisedButton from 'material-ui/lib/raised-button';

import logo from '../../../assets/images/logo.png'
import css from '../styles/components/header.css';

const Header = ({ css }) => (
    <div className={css.root}>
        <AppBar 
            showMenuIconButton={false}
            title={<img className={css.logo} src={logo}></img>}
        />
        <div className={css.cta}>
            <div className={css.actionHolder}>
                <h1> Front-end Developer </h1>
                <RaisedButton className={css.button}
                    label="View Recent Projects"
                />
            </div>
        </div>
        <div></div>
    </div>
)

export default styleable(css) (Header)
