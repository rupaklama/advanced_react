import { connect } from 'react-redux';
import Demo from './components/demo';
import {getDemo} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getDemo,
});

const DemoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Demo);

export default DemoContainer;
