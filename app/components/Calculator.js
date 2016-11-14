// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Calculator.css';

class Calculator extends Component {
  static propTypes = {
    // input: PropTypes.string.isRequired,
    output: PropTypes.string.isRequired,
    divide: PropTypes.func.isRequired,
    multiply: PropTypes.func.isRequired,
    plus: PropTypes.func.isRequired,
    minus: PropTypes.func.isRequired,
    one: PropTypes.func.isRequired,
    two: PropTypes.func.isRequired,
    three: PropTypes.func.isRequired,
    four: PropTypes.func.isRequired,
    five: PropTypes.func.isRequired,
    six: PropTypes.func.isRequired,
    seven: PropTypes.func.isRequired,
    eight: PropTypes.func.isRequired,
    nine: PropTypes.func.isRequired,
    zero: PropTypes.func.isRequired,
    period: PropTypes.func.isRequired,
    equal: PropTypes.func.isRequired,
    ac: PropTypes.func.isRequired,
    ce: PropTypes.func.isRequired,
  };

  render() {
    const {
      // input,
      output,
      divide,
      multiply,
      plus,
      minus,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      zero,
      period,
      equal,
      ac,
      ce,
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.backLinkContainer}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.inputOutputContainer}>
          {/* <div>
            {input}
          </div> */}
          <div>
            {output}
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <button className={styles.btn} onClick={ac}>AC</button>
            <button className={styles.btn} onClick={ce}>CE</button>
            <button className={styles.btn} onClick={divide}>
              /
            </button>
            <button className={styles.btn} onClick={multiply}>
              <i className="fa fa-times" />
            </button>
          </div>
          <div>
            <button className={styles.btn} onClick={seven}>7</button>
            <button className={styles.btn} onClick={eight}>8</button>
            <button className={styles.btn} onClick={nine}>9</button>
            <button className={styles.btn} onClick={minus}>
              <i className="fa fa-minus" />
            </button>
          </div><div>
            <button className={styles.btn} onClick={four}>4</button>
            <button className={styles.btn} onClick={five}>5</button>
            <button className={styles.btn} onClick={six}>6</button>
            <button className={styles.btn} onClick={plus}>
              <i className="fa fa-plus" />
            </button>
          </div><div>
            <button className={styles.btn} onClick={one}>1</button>
            <button className={styles.btn} onClick={two}>2</button>
            <button className={styles.btn} onClick={three}>3</button>
            <button className={styles.btn} onClick={equal}>
              =
            </button>
          </div><div>
            <button className={styles.btn} onClick={zero}>0</button>
            <button className={styles.btn} onClick={period}>.</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
