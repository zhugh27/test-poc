const obj = {}
const users = {}
onconnect = (e) => {
    var port = e.ports[0]
    //   portList.push(port)
    // console.log('pppp', port, e.ports, obj, users)

    port.onmessage = ({ data }) => {
        console.log('worker got message', data)
        if (data.type === 'open') {
            users[data.id] = port
            port.postMessage({ type: 'open', data: obj })
        } else if (data.type == 'setToken') {
            obj.login = data.data
            Object.keys(users).forEach(id => {
                const p = users[id]
                // console.log('广播token更新', data)
                p.postMessage && p.postMessage(data)
            })
        }
    }
}
