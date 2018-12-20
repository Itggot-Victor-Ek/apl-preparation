import React, { Component } from 'react';
import { NavLink, Link} from 'react-router-dom'



class UserPage extends Component {

    printUsers = ()=> {
        let users = [
            {
                name: "Simon",
                age: 19,
                gender: "Mail"
            },

            {
                name: "Victor",
                age: 19,
                gender: "mejl"
            },

            {
                name: "Jonathan Nicholas (Nicholai) John Lindqvist",
                age: 12,
                gender: "themail"
            },

            {
                name: "T h",
                age: "???",
                gender: "ụ̵̦̺̳̹͚̣̺̝͖̰͝ͅn̷̢̦̹̪̐̏ķ̸̤̞͔̝͎̮̅̈́̑̔̅͌̈͜n̷̪͔̦̼̜̝͙̱̩͍̲̲̪̈̈͝͝ͅơ̴̢̡̫̙̣̮̩̖̙̖̥͙̟̖̺̊̃̈́̀́̎̀̏̌̽̕͘w̴̥̹̜͈͍͖̯̹͔̪̪͙͉̑̾̅̎̌̈́͆͗́n̴̺͉̩̑͑͊̂̋̀̋̐̆͋͠"
            },

            {
                name: "Mowgli, Johnsson",
                age: 5,
                gender: "Mäjl"
            },
        ]

        let finalData = []
        for (let i = 0; i < users.length; i++) {
            let userName = <h1>{users[i].name}</h1>
            let userAge = <p>Age: {users[i].age}</p>
            let userGender = <p>Gender: {users[i].gender}</p>
            let deleteUserLink = <Link to={`/users/${i}`}>Delete this user</Link>  
            let fullThing = <div>{userName} {userAge} {userGender} {deleteUserLink} <hr></hr></div>
            finalData.push(fullThing)
        }
        return finalData
   }

   render() {
        return(
            <div>
                <h1>Welcome to the user page!</h1>
                <div>{this.printUsers()}</div>
                <NavLink to="/users/add">Add User</NavLink>
            </div>
        )
    }
}
export default UserPage;