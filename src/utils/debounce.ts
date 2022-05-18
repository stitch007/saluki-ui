export const debounce = (func: Function, delay: number) => {
  let timer: number | null = null
  return function(this: any, ...args: any[]) {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
