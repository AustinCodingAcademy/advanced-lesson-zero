import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld.jsx';
import Hello from './Hello.jsx';
import StoryBox from './StoryBox.jsx';


class App extends React.Component {
  render() {
    const users = [
      { _id: 1, name: 'Leia' },
      { _id: 2, name: 'Luke' },
      { _id: 3, name: 'Han' }
    ];

    return (
      <div>
        <HelloWorld />
        <StoryBox />
        {
          users.map(function(user) {
            return <Hello key={user._id} name={user.name} />;
          })
        }
      </div>

    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

