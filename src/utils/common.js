/**
 * @param {Function} fn
 * @param {number} wait
 * @returns {Function}  节流函数
 *
 */
export function throttle(fn, wait) {
  let context, args
  let previous = 0

  return function (...argArr) {
    const now = +new Date()
    context = this
    args = argArr
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

export function useResize(el, cb) {
  const resizeObserver = new ResizeObserver((en) => {
    cb(en[0].contentRect)
  })
  resizeObserver.observe(el)
  return resizeObserver
}
