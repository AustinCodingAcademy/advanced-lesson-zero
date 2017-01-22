//we need to import the first component to use react
import React from 'react';
import Hello from './Hello.js'
//Here is our app
class App extends React.Component {
    render()
    {
        const users = [{
                _id: 1,
              name: 'Leia'
            },
            {
                _id: 2,
                name: 'Luke'
            },
            {
                _id: 3,
                name: 'Han'
            }
        ];

        return ( <
            div > {
                users.map(function(user) {
                    return < Hello key={user._id}
                    name={
                        user.name
                    }
                    />;
                })
            } <
            /div>
        );
    }
}
module.exports = App;
