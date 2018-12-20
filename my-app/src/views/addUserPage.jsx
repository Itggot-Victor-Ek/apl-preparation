import React, { Component } from 'react';
import "../css/addUserPage.css"

class AddUser extends Component {
   render() {
        return(
            <div>
                <form className="form" action="/users/failed" method="get" >
                    <label htmlFor="inputName">
                        Name:
                        <input type="text" name="inputName"/>
                    </label>
                    <label htmlFor="inputAge">
                        Age:
                        <input type="text" name="inputAge" />
                    </label>
                    <label htmlFor="inputGender">
                        Gender:
                        <input type="text" name="input"/>
                    </label>
                    <button>Create user!</button>
                </form>
            </div>
        )
    }
}
export default AddUser;