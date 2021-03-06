
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


class ButtonOutline extends PureComponent {
  render() {
    const {   onClick, children, link, style } = this.props;


    if (link) {
      return (
        <Link onClick={onClick} to={link} className={''}>
          {children}
        </Link>
      );
    }

    return (
      <Button style={styles}
       onClick={onClick}>
        {children}
      </Button>
    );
  }
}

const styles = {
    backgroundColor: 'transparent',
    border: '1px solid black',
    textTransform: 'uppercase',
    width: '14rem',
    padding: '0.5rem',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginRight: '1rem',
    cursor:'pointer',

  
}
export default ButtonOutline;
