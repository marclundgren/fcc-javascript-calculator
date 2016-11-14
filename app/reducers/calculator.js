// @flow
import * as CalculatorActions from '../actions/calculator';

function isNumber(value) {
  return typeof Number(value) === 'number';
}

function balanceMultiplicative(expression) {
  const operandMultiply = expression.indexOf('x');
  const operandDivide = expression.indexOf('/');

  const operand = Math.max(operandMultiply, operandDivide);
  const leftSide = expression.slice(0, operand);
  const rightSide = expression.slice(operand + 1, expression.length);

  const balancedLeftSide = Number(balance(leftSide));
  const balancedRightSide = Number(balance(rightSide));

  if (operandMultiply === operand) {
    return balancedLeftSide * balancedRightSide;
  }

  return balancedLeftSide / balancedRightSide;
}
function balanceAdditive(expression) {
  const operandAdd = expression.indexOf('+');
  const operandSubtract = expression.indexOf('-');
  const operand = Math.max(operandAdd, operandSubtract);

  const leftSide = expression.slice(0, operand);
  const rightSide = expression.slice(operand + 1, expression.length);

  const balancedLeftSide = Number(balance(leftSide));
  const balancedRightSide = Number(balance(rightSide));

  if (operandAdd === operand) {
    return balancedLeftSide + balancedRightSide;
  }

  return balancedLeftSide - balancedRightSide;
}

function balance(expression) {
  if (/(\+|-)/.exec(expression)) {
    return balanceAdditive(expression);
  }

  if (/(x|\/)/.exec(expression)) {
    return balanceMultiplicative(expression);
  }

  return expression;
}

export default function calculator(state: string = '0', action: Object) {
  function normalizeInput(input) {
    if (isNumber(input)) {
      return `${state === '0' ? '' : state}${input}`;
    }

    // TODO: if an operand exists at the end of the state, replace it with this
    return input;
  }

  function evaluate(input) {
    return balance(input);
  }

  switch (action.type) {
    case CalculatorActions.EQUAL: {
      return evaluate(state);
    }
    case CalculatorActions.AC:
      return '0';
    case CalculatorActions.CE:
      return '0';
    case CalculatorActions.DIVIDE:
      return normalizeInput('/');
    case CalculatorActions.MULTIPLY:
      return normalizeInput('x');
    case CalculatorActions.PLUS:
      return normalizeInput('+');
    case CalculatorActions.MINUS:
      return normalizeInput('-');
    case CalculatorActions.PERIOD:
      return `${state}.`;
    case CalculatorActions.ZERO:
      return normalizeInput(0);
    case CalculatorActions.ONE:
      return normalizeInput(1);
    case CalculatorActions.TWO:
      return normalizeInput(2);
    case CalculatorActions.THREE:
      return normalizeInput(3);
    case CalculatorActions.FOUR:
      return normalizeInput(4);
    case CalculatorActions.FIVE:
      return normalizeInput(5);
    case CalculatorActions.SIX:
      return normalizeInput(6);
    case CalculatorActions.SEVEN:
      return normalizeInput(7);
    case CalculatorActions.EIGHT:
      return normalizeInput(8);
    case CalculatorActions.NINE:
      return normalizeInput(9);
    default:
      return state;
  }
}
