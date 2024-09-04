const d = (name, pc, apiData2 = {}) => {
  const apiData = apiData2

  const receiveMessage = (e) => {
    if (e.data.name === name) {
      const id = e.data.id
      const data = e.data.data
      const func = apiData[e.data.apiname]

      if (func) {
        Promise.resolve(func(data))
          .then(res => {
            sendMsgIframe(id, { data: res })
          })
          .catch(error => {
            sendMsgIframe(id, { error, data: error })
          })
      } else {
        sendMsgIframe(id, { error: '不存在', data: null })
      }
    }
  }

  const sendMsgIframe = (id, data) => {
    // const iframe = this.$refs.iframe

    pc.postMessage({ ...data, id, name }, '*')
  }

  window.addEventListener('message', receiveMessage, false)

  // return () => {
  //   window.removeEventListener('message', receiveMessage)
  // }

  return {
    add: (key, func) => {
      apiData[key] = func
    },
    remove () {
      window.removeEventListener('message', receiveMessage)
    }
  }
}

// const p1 = d('fdbdhbfdhbdfhbdf',子项目元素,{aaa:()=>{}})
// p1.add('bbb',()=>{})
// p1.remove()
export default d
