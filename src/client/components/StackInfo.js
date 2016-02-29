import React from 'react'
import styleable from 'react-styleable'

import Paper from 'material-ui/lib/paper'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import tetris from '../../../assets/images/stacktetris.png'


import css from '../styles/components/stackInfo.css';

const stackItems = [
    {
        title: "Front-End",
        items: [
            "JavaScript",
            "Angular",
            "React",
            "HTML",
            "CSS",
            "jQuery"
        ]
    },
    {
        title: "Back-End",
        items: [
            "Node",
            "Expess",
            "Web services"
        ]
    },
    {
        title: "Databases",
        items: [
            "MySQL",
            "MongoDB"
        ]
    },
    {
        title: "Build Tools",
        items: [
            "Gulp",
            "webpack"
        ]
    },
    {
        title: "Version Control",
        items: [
            "Git"
        ]
    }
];

const Process = ({ css }) => (
    <Paper className={css.root}>
        <h2>My Stack</h2>
        <div className={css.contentHolder}>
            <img className={css.mainImage} src={tetris}></img>
            <div className={css.listContainer}>
                {stackItems.map((item, index) => (
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
        </div>
    </Paper>
)

export default styleable(css) (Process)