type ClassValue = string | number | null | undefined | false | ClassValue[]

function flatten(input: ClassValue, out: string[]) {
  if (!input) return
  if (Array.isArray(input)) {
    for (const item of input) flatten(item, out)
    return
  }
  out.push(String(input))
}

/** Lightweight className joiner — avoids pulling in clsx/tailwind-merge for a small component set. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = []
  flatten(inputs, out)
  return out.join(' ')
}
