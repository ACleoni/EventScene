import React from 'react';
import Login from './Login';

class App extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                user: undefined
            }
        }






    
  render() {
    return <Login />;
  }
}


export default App;