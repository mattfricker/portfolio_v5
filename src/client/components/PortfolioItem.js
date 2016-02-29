import React from 'react'
import styleable from 'react-styleable'
import LazyLoad from 'react-lazy-load';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import css from '../styles/components/portfolioItem.css';

const PortfolioItem = ({css, title, image, link, description, status}) => (
  <LazyLoad offsetVertical={80} className={css.root}>
    <Card className={css.card}>
        <CardMedia
        overlay={<CardTitle title={title} subtitle={status} />}
        >
        <img src={image} />
        </CardMedia>
        <CardText>
            {description}
        </CardText>
        <CardActions>
        <FlatButton label="Visit Page" />
        <FlatButton label="See GitHub Repo" />
        </CardActions>
    </Card>
  </LazyLoad>
)

export default styleable(css)(PortfolioItem)