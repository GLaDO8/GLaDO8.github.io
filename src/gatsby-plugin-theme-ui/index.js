import { tailwind } from "@theme-ui/presets"

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    color: `heading`,
    fontSize: [8, 9],
    mt: 2,
  },
  h2: {
    ...tailwind.styles.h2,
    color: `heading`,
    fontSize: [6, 7],
    mt: 2,
  },
  h3: {
    ...tailwind.styles.h3,
    color: `heading`,
    fontSize: [5, 6],
    mt: 3,
  },
  h4: {
    ...tailwind.styles.h4,
    color: `heading`,
    fontSize: [4, 5],
  },
  h5: {
    ...tailwind.styles.h4,
    fontSize: [2, 3],
    mt: 0,
    mb: 0,
  },
  h6: {
    ...tailwind.styles.h6,
    color: `heading`,
    fontSize: 2,
    mb: 2,
  },
}

export default {
  ...tailwind,
  useCustomProperties: true,
  colors: {
    ...tailwind.colors,
    text: tailwind.colors.gray[4],
    primary: tailwind.colors.purple[5],
    secondary: `#7f8ea3`,
    toggleIcon: tailwind.colors.gray[4],
    background: `#131720`,
    heading: tailwind.colors.white,
    divide: tailwind.colors.gray[8],
  },
  fonts: {
    ...tailwind.fonts,
    body: `"Avenir Next", Helvetica, Arial, sans-serif`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
    },
    Main: {
      ...tailwind.styles.Main,
      position: `relative`,
    },
    h5: {
      color: `secondary`,
      fontSize: [1, 2],
      mt: 0,
      mb: 0,
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    ul: {
      li: {
        fontSize: [2, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [2, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    // ...headingStyles,
    // Container: {
    //   padding: [2, 3],
    // },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
  },
  text: {
    ...headingStyles,
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [2, 2],
      color: `text`,
    },
  },
}
