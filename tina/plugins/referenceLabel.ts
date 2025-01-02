/**
 * Use the file name to generate a human-readable label for a reference field
 *
 * Valid extensions from: https://tina.io/docs/reference/collections#overview
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toReferenceLabel = (value: string, fallback?: any) => {
  if (!value) return { label: fallback }

  const parts = value.split("/")
  const fileName = parts[parts.length - 1]
  const noExt = fileName.replace(/\.(json|yaml|markdown|mdx|toml)$/, "")
  const normalized = noExt.replace(/-/g, " ")

  return { label: normalized.replace(/\b\w/g, (l) => l.toUpperCase()) }
}
