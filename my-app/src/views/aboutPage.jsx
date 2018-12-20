import React, { Component } from 'react';
class AboutPage extends Component {

    createTable = () => {
        let table = []

        for (let i = 0; i < 3; i++) {
            
            let children = []
            for (let j = 0; j < 5; j++) {
                children.push(<td>{`Column ${j + 1 }`}</td>)
            }

            table.push(<tr>{children}</tr>)
        }

        return table
    }

   render() {
        return(
            <div>
                <h1>About Page</h1>
                <p>This is just a test project, please ignore</p>
                <table>
                    {this.createTable()}
                </table>
            </div>
        )
    }
}
export default AboutPage;