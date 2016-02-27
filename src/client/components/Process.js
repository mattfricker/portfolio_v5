import React from 'react'
import styleable from 'react-styleable'

import Paper from 'material-ui/lib/paper'
import cycle from '../../../assets/images/cycle.png'


import css from '../styles/components/process.css';

const Process = ({ css }) => (
    <Paper className={css.root}>
        <img className={css.mainImage} src={cycle}></img>
        <h2> Developing solutions is my goal </h2>
    </Paper>
)

export default styleable(css) (Process)
