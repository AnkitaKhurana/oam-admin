import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAdmin } from '../actions/logout';
import Content from './Content';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.props.logoutAdmin();
  }
  render() {
    return (

      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="custom-header mdl-layout__header mdl-layout__header--waterfall">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Oam Admin</span>
              <div className="mdl-layout-spacer" />
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href="https://openaerialmap.org/">Website</a>
                <a className="mdl-navigation__link" onClick={this.onSubmit} href="">Logout</a>
              </nav>
            </div>
          </header>

          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Tasks</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Users</a>
              <a className="mdl-navigation__link" href="">Images</a>
              <a className="mdl-navigation__link" href="">Profile</a>
              <a className="mdl-navigation__link" onClick={this.onSubmit} href="">Logout</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
                <Content />
            </div>
          </main>
        </div>

      </div>
    );
  }
}

Navbar.propTypes = {
  logoutAdmin: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ logoutAdmin }, dispatch)
  };
}


export default connect(null, mapDispatchToProps)(Navbar);

