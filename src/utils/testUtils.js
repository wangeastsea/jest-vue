// 统一封装函数
export const findTestWrapper = (wrapper, tag) => {
  return wrapper.find(`[data-test="${tag}"]`)
}
