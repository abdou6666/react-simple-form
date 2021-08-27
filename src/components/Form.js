import React from 'react';
import Card from '../ui/Card';
import { useState } from 'react';
import classes from './Form.module.css';
const Form = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    function handleUsername(event) {
     
        setUserName(event.target.value);
    }
    function handleAge(event) {
        setAge(event.target.value);
    }
    function submitHandler(event) {
    
        event.preventDefault();
        if (userName === '' || age === '')
            return;
        props.setData({
            username: userName,
            age: age,
            id:Math.floor(Math.random()*100).toString()
        });
        setUserName('');
        setAge('');
    }

    return (

          <Card className={classes.card}>
            <div className={classes.container}>
                 <form className={classes.formConrtol} onSubmit={submitHandler}>
                    <label>Username :</label>
                    <input type="text" value={userName} onChange={handleUsername}/>
                    <label>Age (Years) :</label>
                    <input type="text" value={age} onChange={handleAge}/>
                    <button className={classes.btn} type="submit">Add User</button>
                </form>
            </div>
          </Card>
       
    )
}

export default Form;
