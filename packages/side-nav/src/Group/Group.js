import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "emotion";
import ThemeContext from "@hig/theme-context";
import { createCustomClassNames } from "@hig/utils";
import stylesheet from "./stylesheet";

const Group = props => {
  const {
    intro,
    children,
    stylesheet: customStylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;
  const introClassName = createCustomClassNames(className, "intro");

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            stylesheet: customStylesheet,
            ...otherProps
          },
          resolvedRoles
        );
        return (
          <section className={cx([css(styles.group), className])}>
            {intro && (
              <div className={cx([css(styles.intro), introClassName])}>
                {intro}
              </div>
            )}
            {children}
          </section>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Group.displayName = "Group";

Group.propTypes = {
  /** A slot for arbitrary content to render above the Modules */
  intro: PropTypes.node,
  /** One or more SideNav Modules */
  children: PropTypes.node,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func
};

export default Group;
