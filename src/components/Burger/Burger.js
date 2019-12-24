import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //Default javaScript Object, 
                                                                  //It has a keys method which extracts the keys 
                                                                  //of a given object and turns that into an array,
                                                                  //so it gives us an array of the keys
        .map(igKey => {
            return[...Array(props.ingredients[igKey])].map((_,i)=>{  //Array method provided by javascript, creates an array for the passed size
                return <BurgerIngredient key={igKey+i} type={igKey}/>;
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);
        if(transformedIngredients.length === 0){
            transformedIngredients  = <p>Please start adding ingredients!</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/> 
        </div>
    )
}

export default burger