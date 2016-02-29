import React from 'react'
import styleable from 'react-styleable'
import LazyLoad from 'react-lazy-load';

import Paper from 'material-ui/lib/paper'
import cycle from '../../../assets/images/cycle.png'


import css from '../styles/components/process.css';

const Process = ({ css }) => (
    <Paper className={css.root}>
        <LazyLoad offsetVertical={80}>
            <h2 className={css.header}> My process for problem-solving </h2>
        </LazyLoad>
        <LazyLoad height={250} offsetVertical={80}>
            <img className={css.mainImage} src={cycle}></img>
        </LazyLoad>
    </Paper>
)

export default styleable(css) (Process)
