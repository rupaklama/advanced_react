import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { logout } from 'containers/AuthContainer/meta/actions';
import { getUser } from 'containers/AuthContainer/meta/selectors';
import { selectIsAuthenticated } from 'containers/AuthContainer/meta/selectors';

const mapStateToProps = state => ({
  routes: [
    {
      key: 'vacations',
      path: '/vacations',
      text: 'vacations',
    },
    {
      key: 'profile',
      path: '/profile',
      text: 'profile',
    },
  ],
  user: getUser(state),
  isAuthenticated: selectIsAuthenticated(state),
});

const mapDispatchToProps = {
  logout,
};

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;
