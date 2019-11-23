const undoList = {
  success: true,
  data: [
    { status: 'div', value: '111' },
    { status: 'div', value: '222' }
  ]
}

export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise((resolve) => {
        resolve(undoList)
      })
    }
  }
}
