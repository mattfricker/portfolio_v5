import React from 'react';
import styleable from 'react-styleable';
import LazyLoad from 'react-lazy-load';

import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import tetris from '../../../assets/images/stacktetris.png';


import css from '../styles/components/stackInfo.css';

const Process = ({ css, items }) => (
    <Paper className={css.root}>
        <h2 className={css.header}>My Tech Stack</h2>
        <div className={css.contentHolder}>
            <LazyLoad debounce={false} offsetVertical={80}>
                <img className={css.mainImage} src={tetris}></img>
            </LazyLoad>
            <LazyLoad debounce={false} offsetVertical={80}>
                <div className={css.listContainer}>
                    {items.map((item, index) => (
                        <List 
                        className={css.list} 
                        key={index} 
                        subheader={item.title}>
                            {item.items.map(technology => (
                                <ListItem 
                                className={css.listItem} 
                                key={technology} 
                                primaryText={technology}
                                disabled={true}
                                />
                            ))}
                        </List>
                    ))}
                </div>
            </LazyLoad>
        </div>
    </Paper>
)

export default styleable(css) (Process)