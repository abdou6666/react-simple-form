import Card from "./Card";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{ props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
              <button>okay</button>
        </footer>
    </Card>
        
    )
}

export default ErrorModal;
