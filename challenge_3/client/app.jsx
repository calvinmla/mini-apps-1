// import * as $ from 'jquery';

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  click() {
    this.props.f1Click();
  }

  render() {
    let f1 = this.props.state.f1;
    let display;
    if (f1) {
      display = <React.Fragment>
        <h5>Enter your info and click the Submit button to create an account. Then click the Next button to continue</h5>
        <form action='/F1' method='POST'>
          <div>
            <input type='text' name='name' required/>
            <label htmlFor='name'> Name</label>
          </div>
          <div>
            <input type='email' name='email' required/>
            <label htmlFor='email'> Email</label>
          </div>
          <div>
            <input type='text' name='password' required/>
            <label htmlFor='password'> Password</label>
          </div>
          <br/>
          <div>
            <input type='submit' value='Submit' required/>
          </div>
          <br/>
          <div>
            <input type='button' value='Next' onClick={this.click.bind(this)}/>
          </div>
        </form>
      </React.Fragment>;
    } else {
      display = <F2 f2Click={this.props.f2Click.bind(this)} state={this.props.state}/>;
    }
    return (
      <React.Fragment>
        {display}
      </React.Fragment>
    )
  }
};



class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  click() {
    this.props.f2Click();
  }

  render() {
    let f2 = this.props.state.f2;
    let display;
    if (f2) {
      display = <React.Fragment>
        <h5>Enter your info and click the Submit button to save. Then click the Next button to continue</h5>
        <form action='/F2' method='POST'>
          <div>
            <input type='text' name='address' required/>
            <label htmlFor='address'> Address</label>
          </div>
          <div>
            <input type='number' name='phone' required/>
            <label htmlFor='phone'> Phone Number</label>
          </div>
          <br/>
          <div>
            <input type='submit' value='Submit' required/>
          </div>
          <br/>
          <div>
            <input type='button' value='Next' onClick={this.click.bind(this)}/>
          </div>
        </form>
      </React.Fragment>
    } else {
      display = <F3/>
    }
    return (
      <React.Fragment>
        {display}
      </React.Fragment>
    )
  }
};



class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h3>hi</h3>
      </React.Fragment>
    )
  }
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitor: 0,
      homePage: true,
      f1: false,
      f2: false,
      f3: false,
      summary: false
    }
  }

  homeClick(e) {
    e.preventDefault();
    $.ajax({
      url: '/checkout',
      method: 'POST',
      success: (data) => {
        this.setState({
          visitor: data.insertId,
          homePage: !this.state.homePage,
          f1: !this.state.f1
        });
      }
    })
  }

  f1Click() {
    this.setState({
      f1: !this.state.f1,
      f2: !this.state.f2,
    });
  }

  f2Click() {
    this.setState({
      f2: !this.state.f2,
      f3: !this.state.f3
    });
  }

  render() {
    let homePage = this.state.homePage;
    let display;
    if (homePage) {
      display = <React.Fragment>
        <h5>Click the Checkout button to continue</h5>
        <button onClick={this.homeClick.bind(this)} >Checkout</button>
      </React.Fragment>;
    } else {
      display = <F1 f1Click={this.f1Click.bind(this)} f2Click={this.f2Click.bind(this)} state={this.state}/>;
    }
    return (
      <React.Fragment>
        <h1>Multistep Checkout Experience</h1>
        {display}
      </React.Fragment>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));