import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from './redux/actionType'

import audiobell from './audio/got-it-done-613.mp3'
const SocketClient = () => {
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()
    const audioRef = useRef()

    // joinUser
    useEffect(() => {
        socket.emit('joinUser', auth.user)
    }, [socket, auth.user])

    // Message
    useEffect(() => {
        socket.on('addMessageToClient', msg => {
            dispatch({ type: GLOBALTYPES.ADD_MESSAGE, payload: msg.data })
        })
        return () => socket.off('addMessageToClient')
    }, [socket, dispatch])
    return (
        <>
        </>
        // <>
        //     <audio controls ref={audioRef} style={{ display: 'none' }} >
        //         <source src={audiobell} type="audio/mp3" />
        //     </audio>
        // </>
    )
}

export default SocketClient