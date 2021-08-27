import React from 'react';
import Card from '../ui/Card';
import { useState } from 'react';
import classes from './Form.module.css';
const Form = () => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    function handleUsername(event) {
     
        setUserName(event.target.value);
    }
    function handleAge(event) {
        setAge(event.target.value);
    }
    function addUserHandler(event) {
        event.preventDefault();
    }

    return (

            <Card className={classes.card}>
                <form className={classes.formConrtol} onSubmit={addUserHandler}>
                    <label>Username :</label>
                    <input type="text" value={userName} onChange={handleUsername}/>
                    <label>Age (Years) :</label>
                    <input type="text" value={age} onChange={handleAge}/>
                    <button className={classes.btn} type="submit">Add User</button>
                </form>
            </Card>
       
    )
}

export default Form;
