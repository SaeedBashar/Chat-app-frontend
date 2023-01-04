
import classes from './button.module.css';

const buttonRipple = props => {

    return (
        <button 
            className={classes.btnn + " " + classes.btnnRipple}
            onClick={props.clicked}
            >{props.text}</button>
    )
}

export default buttonRipple