// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import * as CalculatorActions from '../actions/calculator';

function mapStateToProps({ calculator }) {
  const input = String(calculator);
  const output = String(calculator);

  return { input, output };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CalculatorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
