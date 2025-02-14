import React from "react";
import PropTypes from "prop-types";
import { cx, css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CaretUpMUI, CaretUpSUI, CaretDownMUI, CaretDownSUI } from "@hig/icons";
import { availableVariants } from "@hig/input";
import {
  createCustomClassNames,
  memoizeCreateButtonEventHandlers
} from "@hig/utils";
import stylesheet from "./stylesheet";

const SpinnerPresenter = props => {
  const createButtonHandlers = memoizeCreateButtonEventHandlers();
  const {
    disabled,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    increment,
    decrement,
    clearTimer,
    mouseDownDecrement,
    mouseDownIncrement,
    variant,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;

  const {
    handleClick: handleIncrementClick,
    handleKeyDown: handleIncrementKeyDown
  } = createButtonHandlers(increment);

  const {
    handleClick: handleDecrementClick,
    handleKeyDown: handleDecrementKeyDown
  } = createButtonHandlers(decrement);

  const { className } = otherProps;
  const spinnerWrapperClassName = createCustomClassNames(
    className,
    "spinner-wrapper"
  );
  const boxWrapperClassName = createCustomClassNames(className, "box-wrapper");
  const spinnerClassName = createCustomClassNames(className, "spinner");
  const spinnerUpClassName = createCustomClassNames(
    className,
    "spinner-icon-up"
  );
  const spinnerDownClassName = createCustomClassNames(
    className,
    "spinner-icon-down"
  );

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet(
          {
            disabled,
            variant,
            stylesheet: customStylesheet
          },
          resolvedRoles,
          metadata.densityId
        );
        const UpIcon =
          metadata.densityId === "medium-density" ? CaretUpMUI : CaretUpSUI;

        const DownIcon =
          metadata.densityId === "medium-density" ? CaretDownMUI : CaretDownSUI;

        return (
          <div
            className={cx(css(styles.spinnerWrapper), spinnerWrapperClassName)}
          >
            <div className={cx(css(styles.boxWrapper), boxWrapperClassName)}>
              <span
                className={cx(css(styles.spinner), spinnerClassName)}
                onClick={handleIncrementClick}
                onMouseDown={mouseDownIncrement}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseUp={clearTimer}
                role="button"
                tabIndex="-1"
                onKeyDown={handleIncrementKeyDown}
              >
                <UpIcon
                  className={cx(css(styles.iconUp), spinnerUpClassName)}
                />
              </span>
              <span
                className={cx(css(styles.spinner), spinnerClassName)}
                onClick={handleDecrementClick}
                onMouseDown={mouseDownDecrement}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseUp={clearTimer}
                role="button"
                tabIndex="-1"
                onKeyDown={handleDecrementKeyDown}
              >
                <DownIcon
                  className={cx(css(styles.iconDown), spinnerDownClassName)}
                />
              </span>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

SpinnerPresenter.displayName = "SpinnerPresenter";

SpinnerPresenter.propTypes = {
  disabled: PropTypes.bool,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  variant: PropTypes.oneOf(availableVariants),
  increment: PropTypes.func,
  decrement: PropTypes.func,
  clearTimer: PropTypes.func,
  mouseDownIncrement: PropTypes.func,
  mouseDownDecrement: PropTypes.func,
  stylesheet: PropTypes.func
};

export default SpinnerPresenter;
