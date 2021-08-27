import React from 'react'
import Card from '../ui/Card'
import classes from './ListUser.module.css'
const ListUser = (props) => {
    
    return (
       
       <div>
        {props.data.length ?
                     <Card>
             <div className={classes.wrapper}>
               { props.data.map((person) => (
                   <div key={person.id}>
                        <p>{person.username}</p>
                        <p>{person.age}</p>
                    </div> 
                ))}
                </div>
            </Card>
            : ''}
         </div>
      
       )
            
}

export default ListUser
