class F1 extends React.Component {
  constructor(props) {
    super(props);
  }

  f1Click(e) {
    e.preventDefault();
    $.ajax({
      url: '/f1',
      method: 'POST',
      data: {
        id: this.props.state.visitor,
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val(),
      },
      success: (data) => {
        this.props.checker();
      }
    })
  }

  render() {
    let f1 = this.props.state.f1;
    let display;
    if (f1) {
      display = <React.Fragment>
        <h5>Enter your info and click the Next button to create an account and continue</h5>
        <form action='/F1' method='POST'>
          <div>
            <input id='name' type='text' name='name' required/>
            <label htmlFor='name'> Name</label>
          </div>
          <div>
            <input id='email' type='email' name='email' required/>
            <label htmlFor='email'> Email</label>
          </div>
          <div>
            <input id='password' type='text' name='password' required/>
            <label htmlFor='password'> Password</label>
          </div>
          <br/>
          <div>
            <button onClick={this.f1Click.bind(this)}>Next</button>
          </div>
        </form>
      </React.Fragment>;
    } else {
      display = <F2 state={this.props.state} checker={this.props.checker}/>;
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
  }

  f2Click(e) {
    e.preventDefault();
    $.ajax({
      url: '/f2',
      method: 'POST',
      data: {
        id: this.props.state.visitor,
        address: $('#address').val(),
        phone: $('#phone').val(),
      },
      success: (data) => {
        this.props.checker();
      }
    })
  }

  render() {
    let f2 = this.props.state.f2;
    let display;
    if (f2) {
      display = <React.Fragment>
        <h5>Enter your info and click the Next button to save and continue</h5>
        <form action='/f2' method='POST'>
          <div>
            <input id='address' type='text' name='address' required/>
            <label htmlFor='address'> Address</label>
          </div>
          <div>
            <input id='phone' type='text' name='phone' required/>
            <label htmlFor='phone'> Phone Number</label>
          </div>
          <br/>
          <div>
            <button onClick={this.f2Click.bind(this)}>Next</button>
          </div>
        </form>
      </React.Fragment>
    } else {
      display = <F3 state={this.props.state} checker={this.props.checker}/>
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
  }

  f3Click(e) {
    e.preventDefault();
    $.ajax({
      url: '/f3',
      method: 'POST',
      data: {
        id: this.props.state.visitor,
        creditcard: $('#cc').val(),
        expiration: $('#exp').val(),
        cvv: $('#cvv').val(),
        zipcode: $('#zip').val(),
      },
      success: (data) => {
        this.props.checker();
      }
    })
  }

  render() {
    let f3 = this.props.state.f3;
    let display;
    if (f3) {
      display = <React.Fragment>
        <h5>Enter your info and click the Next button to save and continue</h5>
        <form action='/f2' method='POST'>
          <div>
            <input id='cc' type='number' name='cc' required/>
            <label htmlFor='cc'> Credit Card</label>
          </div>
          <div>
            <input id='exp' type='number' name='exp' required/>
            <label htmlFor='exp'> Expiration Date</label>
          </div>
          <div>
            <input id='cvv' type='number' name='cvv' required/>
            <label htmlFor='cvv'> CVV</label>
          </div>
          <div>
            <input id='zip' type='number' name='zip' required/>
            <label htmlFor='zip'> Zip Code</label>
          </div>
          <br/>
          <div>
            <button onClick={this.f3Click.bind(this)}>Next</button>
          </div>
        </form>
      </React.Fragment>
    } else {
      display = <Summary state={this.props.state} checker={this.props.checker}/>
    }
    return (
      <React.Fragment>
        {display}
      </React.Fragment>
    )
  }
};


class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $.ajax({
      url: '/summary',
      method: 'POST',
      data: {
        id: this.props.state.visitor
      },
      success: (data) => {
        for (let key in data) {
          if (key !== 'id') {
            $(`<div>${key}: ${data[key]}</div>`).appendTo('#userInfo')
          }
        }
      }
    })
  }

  summaryClick(e) {
    e.preventDefault();
    this.props.checker();
  }

  render() {
    let summary = this.props.state.summary;
    let display;
    if (summary) {
      display = <React.Fragment>
        <h5>Please confirm your information and click the Purchase button to complete your order</h5>
        <div id='userInfo'></div>
        <br/>
        <button onClick={this.summaryClick.bind(this)} >Purchase</button>
      </React.Fragment>;
    } else {
      display = <App/>;
    }
    return (
      <React.Fragment>
        {display}
      </React.Fragment>
    )
  }
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitor: 0,
      home: true,
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
        })
        this.stateChecker();
      }
    })
  }

  stateChecker() {
    if (this.state.home) {
      this.setState({
        home: false,
        f1: true
      })
    } else if (this.state.f1) {
      this.setState({
        f1: false,
        f2: true
      })
    } else if (this.state.f2) {
      this.setState({
        f2: false,
        f3: true
      })
    } else if (this.state.f3) {
      this.setState({
        f3: false,
        summary: true
      })
    } else {
      this.setState({
        summary: false,
        home: true
      })
    }
  }

  render() {
    let home = this.state.home;
    let display;
    if (home) {
      display = <React.Fragment>
        <h5>Click the Checkout button to continue</h5>
        <button onClick={this.homeClick.bind(this)} >Checkout</button>
      </React.Fragment>;
    } else {
      display = <F1 state={this.state} checker={this.stateChecker.bind(this)}/>;
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