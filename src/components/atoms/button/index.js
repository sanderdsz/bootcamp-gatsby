import React, { Component } from "react"
import cx from "classnames"
import PropTypes from "prop-types"

import styles from "./styles.scss"
import buttonStyles from "./styles.module.scss"

class Button extends Component {
  /* Define static properties for custom CSS classes */
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    className: "",
    label: "",
    size: "",
  }

  /*
   * expecting a function called onClick from parent
   * which will notify the parent if the button is clicked.
   * call this function inside our event handler which will check
   * if the button is in disabled state or not and then call the function */
  handleButtonClick = event => {
    const { onClick, disabled } = this.props

    if (disabled) return

    onClick &&
      onClick({
        event,
      })
  }

  /*
   * Give to the label, then to the child element passed
   * otherwise default text Button will be returned */
  renderChildren = () => {
    const { label, children } = this.props

    if (label) {
      return label
    }

    if (children) {
      return children
    }

    return "Button"
  }

  render() {
    /* function that return the child that
     * will be rendered inside the button */
    const { className, size } = this.props

    const _className = cx(className, buttonStyles[size])

    return (
      <div onClick={this.handleButtonClick} className={_className}>
        {this.renderChildren()}
      </div>
    )
  }
}

export default Button
