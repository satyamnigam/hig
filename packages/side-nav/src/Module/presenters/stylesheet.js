export default function stylesheet(props, themeData) {
  const { stylesheet: customStylesheet } = props;
  const activeBorderLeft = `2px solid ${themeData["colorScheme.reference.accent"]}`;
  const activeBorderBefore = active => ({
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "32px",

    ...(active
      ? {
          color: themeData["colorScheme.reference.accent"],
          borderLeft: activeBorderLeft
        }
      : { borderLeft: "2px solid transparent" })
  });
  const styles = {
    wrapper: {
      display: "flex",
      alignItems: "stretch",
      paddingLeft: "2px",
      flex: "1 1 auto",
      textDecoration: "none",
      cursor: "pointer",
      color: themeData["typography.body.color"],

      "&:before": activeBorderBefore(props.active || props.activeChildren),

      "&:focus, &:hover": {
        outline: "none",
        color: themeData["colorScheme.reference.accent"],

        "svg *": {
          fill: themeData["colorScheme.reference.accent"]
        }
      },

      "&:focus:before, &:hover:before": activeBorderBefore(true),

      ...((props.active || props.activeChildren) && {
        "& svg *": {
          fill: themeData["colorScheme.reference.accent"]
        }
      })
    },

    title: {
      fontWeight: "700",
      fontSize: "14px",
      paddingLeft: themeData["density.spacings.extraExtraSmall"],
      paddingTop: "5px",
      lineHeight: "20px"
    },

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "38px",
      "& svg": {
        pointerEvents: "none"
      }
    },

    externalIcon: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      padding: "6px 10px"
    },

    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      minHeight: "32px",
      marginRight: themeData["density.spacings.extraSmall"],

      "&:hover svg *": {
        fill: themeData["colorScheme.reference.accent"],
        pointerEvents: "none"
      }
    },

    module: {
      outline: "none",
      fontFamily: themeData[`typography.body.fontFamily`],
      fontSize: themeData[`typography.body.fontSize`],
      fontWeight: themeData[`typography.body.fontWeight`],
      lineHeight: themeData[`typography.body.lineHeight`],
      position: "relative",
      margin: `${themeData["density.spacings.extraSmall"]} 0`,
      userSelect: "none"
    },

    submodule: {
      paddingLeft: props.icon ? "46px" : themeData["density.spacings.medium"]
    },

    link: {
      outline: "none",
      display: "flex",
      alignItems: "stretch",
      paddingLeft: "2px",
      flex: "1 1 auto",
      textDecoration: "none",
      cursor: "pointer",

      "&:hover svg *": {
        fill: themeData["colorScheme.reference.accent"]
      },

      ...((props.active || props.activeChildren) && {
        "&:before": activeBorderBefore(true),
        "& svg *": {
          fill: themeData["colorScheme.reference.accent"]
        }
      }),

      "&:hover:before, &:focus:before": activeBorderBefore(true)
    }
  };

  if (customStylesheet) {
    return customStylesheet(styles, props, themeData);
  }

  return styles;
}
