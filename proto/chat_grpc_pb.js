// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_chat_pb = require('../proto/chat_pb.js');

function serialize_grpc_Empty(arg) {
  if (!(arg instanceof proto_chat_pb.Empty)) {
    throw new Error('Expected argument of type grpc.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_Empty(buffer_arg) {
  return proto_chat_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_Note(arg) {
  if (!(arg instanceof proto_chat_pb.Note)) {
    throw new Error('Expected argument of type grpc.Note');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_Note(buffer_arg) {
  return proto_chat_pb.Note.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServerService = exports.ChatServerService = {
  // This bi-directional stream makes it possible to send and receive Notes between 2 persons
  chatStream: {
    path: '/grpc.ChatServer/ChatStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_chat_pb.Empty,
    responseType: proto_chat_pb.Note,
    requestSerialize: serialize_grpc_Empty,
    requestDeserialize: deserialize_grpc_Empty,
    responseSerialize: serialize_grpc_Note,
    responseDeserialize: deserialize_grpc_Note,
  },
  sendNote: {
    path: '/grpc.ChatServer/SendNote',
    requestStream: false,
    responseStream: false,
    requestType: proto_chat_pb.Note,
    responseType: proto_chat_pb.Empty,
    requestSerialize: serialize_grpc_Note,
    requestDeserialize: deserialize_grpc_Note,
    responseSerialize: serialize_grpc_Empty,
    responseDeserialize: deserialize_grpc_Empty,
  },
};

exports.ChatServerClient = grpc.makeGenericClientConstructor(ChatServerService);
