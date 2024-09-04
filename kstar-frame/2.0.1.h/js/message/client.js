const message = (name, pc = window.parent) => {
  const apis = {}
  const obj = {
    send: (apiname, data) => {
      const id = 'id_' + new Date().getTime() + '_' + Math.random()
      pc.postMessage({ id, apiname, name, data }, '*')
      return new Promise((resolve, reject) => {
        apis[id] = { resolve, reject }
      })
    },
    remove: () => {
      window.removeEventListener('message', receiveMessage)
    }
  }

  function receiveMessage (e) {

    if (e.data.name === name) {

      const id = e.data.id
      if (apis[id]) {
        if (e.data.error) {
          apis[id].reject(e.data.data)
        } else {
          apis[id].resolve(e.data.data)
        }

        delete apis[id]
      }

    }
  }
  window.addEventListener('message', receiveMessage, false)


  return obj

}

export default message


