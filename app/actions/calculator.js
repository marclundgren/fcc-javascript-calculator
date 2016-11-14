// @flow
export const AC = 'AC';
export const CE = 'CE';
export const DIVIDE = 'DIVIDE';
export const MULTIPLY = 'MULTIPLY';
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const ZERO = 'ZERO';
export const ONE = 'ONE';
export const TWO = 'TWO';
export const THREE = 'THREE';
export const FOUR = 'FOUR';
export const FIVE = 'FIVE';
export const SIX = 'SIX';
export const SEVEN = 'SEVEN';
export const EIGHT = 'EIGHT';
export const NINE = 'NINE';
export const EQUAL = 'EQUAL';
export const PERIOD = 'PERIOD';

export function ac() {
  return {
    type: AC
  };
}

export function ce() {
  return {
    type: CE
  };
}

export function divide() {
  return {
    type: DIVIDE
  };
}

export function multiply() {
  return {
    type: MULTIPLY
  };
}

export function plus() {
  return {
    type: PLUS
  };
}

export function minus() {
  return {
    type: MINUS
  };
}

export function one() {
  return {
    type: ONE
  };
}

export function two() {
  return {
    type: TWO
  };
}

export function three() {
  return {
    type: THREE
  };
}

export function four() {
  return {
    type: FOUR
  };
}

export function five() {
  return {
    type: FIVE
  };
}

export function six() {
  return {
    type: SIX
  };
}

export function seven() {
  return {
    type: SEVEN
  };
}

export function eight() {
  return {
    type: EIGHT
  };
}

export function nine() {
  return {
    type: NINE
  };
}

export function zero() {
  return {
    type: ZERO
  };
}

export function equal() {
  return {
    type: EQUAL
  };
}

export function period() {
  return {
    type: PERIOD
  };
}
/*
export function incrementIfOdd() {
  return (dispatch: Function, getState: Function) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: Function) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
*/
