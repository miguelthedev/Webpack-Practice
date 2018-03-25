import React from 'react';
import classes from './PizaImage.css';
import PizzaImg from '../../assets/pizza.jpg';

const PizzaImage = props => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImg} className={classes.PizzaImg}/>
  </div>
);

export default PizzaImage;