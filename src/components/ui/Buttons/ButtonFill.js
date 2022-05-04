
import React, { PureComponent } from "react";
import Button from "./Button";
import '../../../App.css';

class ButtonFill extends PureComponent {
  render() {
    const { onClick, children } = this.props;

    

    return (
      <Button style={styles}
      className='button-cart'
       onClick={onClick}>
        {children}
      </Button>
    );
  }
}

const styles = {
  backgroundColor: '#5ECE7B',
  position: 'static',
    border: 'none',
    width: '120px',
    height: '43px',
    left: '0px',
    top: '0px',
    padding: '16px 16px',
    textAlign: 'center',
    color: '#FFFFFF',
    marginRight: '1rem',
    cursor:'pointer',
}
export default ButtonFill;
