const DM_SELECTOR = '[data-theme="dark"]'

export const tailwindTypography = (theme: (path: string) => string) => ({
  DEFAULT: {
    css: {
      maxWidth: "100%",
      color: "inherit",

      // heading fonts
      "h1, h2, h3, h4, h5, h6": {
        fontFamily: "Krona One, sans-serif",
        letterSpacing: "-0.025em",
        color: theme("colors.purple.950"),
      },
      [`${DM_SELECTOR} h1, ${DM_SELECTOR} h2, ${DM_SELECTOR} h3, ${DM_SELECTOR} h4, ${DM_SELECTOR} h5, ${DM_SELECTOR} h6`]:
        {
          color: theme("colors.purple.100"),
        },

      // code blocks
      pre: {
        backgroundColor: theme("colors.slate.100/50%"),
        color: theme("colors.slate.950"),
      },
      [`${DM_SELECTOR} pre`]: {
        backgroundColor: theme("colors.slate.950/50%"),
        color: theme("colors.slate.300"),
      },
    },
  },
  // light: {
  //   css: {
  //     "--tw-prose-body": theme("colors.black/80%"),
  //     "--tw-prose-headings": theme("colors.purple.950"),
  //     "--tw-prose-pre-bg": theme("colors.slate.100"),
  //     "--tw-prose-pre-code": theme("colors.slate.950"),
  //   },
  // },
  // dark: {
  //   css: {
  //     "--tw-prose-body": theme("colors.white/80%"),
  //     "--tw-prose-headings": theme("colors.purple.100"),
  //     "--tw-prose-pre-bg": theme("colors.slate.950"),
  //     "--tw-prose-pre-code": theme("colors.slate.300"),
  //   },
  // },
})
