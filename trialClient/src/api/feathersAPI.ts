import io from 'socket.io-client'
import {feathers} from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

import authentication from '@feathersjs/authentication-client'

const socket = io(import.meta.env.PUBLIC_BACKEND_URL)
const client = feathers()

// Setup the transport (Rest, Socket, etc.) here
client.configure(socketio(socket))

// Available options are listed in the "Options" section
client.configure(authentication())

export default client