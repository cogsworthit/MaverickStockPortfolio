import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pw: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleSignIn(e) {
    e.preventDefault()
    this.props.signIn(this.state.email, this.state.pw)
  }

  onChange(e, type) {
    e.preventDefault()
    this.setState({
      [type]: e.target.value
    })
  }

  handleSignUp(e) {
    e.preventDefault()
    this.props.changeView('signup')
  }

  render() {
    return (
      <section className="hero signinbg is-fullheight">
        <div className="hero-body">
          <div className="columns is-multiline is-centered">
            <div className="column">
              <div className="card card-signin">
                <div className="card-content">
                  <div className="content">
                  <form>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control has-icons-left has-icons-right">
                        <input className="input is-success" onChange={(e) => this.onChange(e, 'email')} value={this.state.email} autoComplete="email" type="text" />
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                          <i className="fas fa-check"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Password</label>
                      <p className="control has-icons-left">
                        <input className="input" onChange={(e) => this.onChange(e, 'pw')} value={this.state.pw} autoComplete="current-password" type="password" />
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field is-grouped">
                      <div className="control signin">
                        <button onClick={this.handleSignIn} className="button is-link">Sign In</button>
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control signin">
                        Don't have an account? <a onClick={this.handleSignUp} className="is-link">Sign Up</a>
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control signin">
                        Or sign in as a <a onClick={() => this.props.setGuest()} className="is-link">Guest</a>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignIn;