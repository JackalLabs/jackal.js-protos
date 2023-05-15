export function deprecated(
  thing: string,
  version: string,
  opts?: { aggressive?: boolean; replacement?: string }
) {
  let notice = `jackal.js-protos | ${thing} is deprecated as of: ${version}`
  if (opts?.replacement) {
    notice += ` - Please use ${opts.replacement} instead`
  }
  console.error(notice)
  if (opts?.aggressive) alert(notice)
}
