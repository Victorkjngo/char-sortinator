const React = require('react');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      strings: []
    }
  }

  render() {
    return (
      <div className="app">
      <form>
        I AM A FORM
      </form>
      {
        this.state.strings.map(string => {

        })
      }
    </div>
    );
    
  }
}

module.exports = App;