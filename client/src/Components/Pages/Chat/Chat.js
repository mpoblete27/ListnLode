import React, { Component } from "react"; 
import Chatkit from "@pusher/chatkit-client";
import MessageList from "./MessageList/MessageList";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import RoomList from "./RoomList/RoomList";
import NewRoomForm from "./NewRoomForm/NewRoomForm";
import "./Chat.css";

import { tokenUrl, instanceLocator } from "./config";

// connect Sequelize.js to hit the const User

class App extends Component {
    
  constructor() {
    super()
    this.state = {
      roomId: null,
      messages: ["WHERE ARE MY DAMN MESSAGES??!?!?!????","Hello?!?!","Oh hey, what's up class!","Where am I?....","I need caffeine :<"],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
    this.createRoom = this.createRoom.bind(this)
  } 
  
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Cat',
      tokenProvider: new Chatkit.TokenProvider({
          url: tokenUrl
      })
    })
    
    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.getRooms()
    })
    .catch(err => console.log('error on connecting: ', err))
  }
  
  getRooms() {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(err => console.log('error on joinableRooms: ', err))
  }
  
  subscribeToRoom(roomId) {
    this.setState({ messages: [] })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }        
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('error on subscribing to room: ', err))
  }
  
  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }
  
  createRoom(name) {
    this.currentUser.createRoom({
      name
    })
    .then(room => {
      this.subscribeToRoom(room.id)
    })
    .catch(err => console.log('error with createRoom: ', err))
  }
  
  render() {
    return (
      <div className="app">
        <RoomList
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
          roomId={this.state.roomId} />
        <MessageList 
          roomId={this.state.roomId}
          messages={this.state.messages} />
        <SendMessageForm
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage} />
        <NewRoomForm createRoom={this.createRoom} />
      </div>
    );
  }
}

export default App