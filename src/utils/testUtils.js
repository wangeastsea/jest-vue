// 统一封装函数
export const findTestWrapper = (wrapper, tag) => {
  return wrapper.findAll(`[data-test="${tag}"]`)
}
