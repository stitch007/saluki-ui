export const throttle = (func: Function, delay: number): Function => {
  let timer: number | null = null
  return function(this: any, ...args: any[]) {
    if (!timer) {
      timer = window.setTimeout(() => {
        timer = null
        func.apply(this, args)
      }, delay)
    }
  }
}
