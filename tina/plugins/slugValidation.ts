export const slugValidation = {
  validate: (value?: string) => {
    if (value && !value.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) {
      return "Must be dash-separated, lowercase words"
    }
  },
}
