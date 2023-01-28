#include "WebsocketRobotController.hpp"

#define BIND_MEMBER_FN_TO_CALLBACK(fn) \
  [this](auto&&... args) -> decltype(auto) { return fn(std::forward<decltype(args)>(args)...); }

void WebsocketRobotController::attachTo(AsyncWebServer& server) {
  server.addHandler(&this->wsServer);
  // this macro is required to pass class member function as a callback
  this->wsServer.onEvent(BIND_MEMBER_FN_TO_CALLBACK(this->onWebsocketEvent));
}

void WebsocketRobotController::onWebsocketEvent(AsyncWebSocket* socker,
                                                AsyncWebSocketClient* client,
                                                AwsEventType eventType, void* arg, uint8_t* data,
                                                size_t len) {
  switch (eventType) {
    case WS_EVT_CONNECT:
      this->onClientConnected(client);
      break;
    case WS_EVT_DATA:
      this->onReceivedData(data, len);
      break;
    case WS_EVT_DISCONNECT:
      this->onClientDisconnected(client);
      break;
    case WS_EVT_ERROR:
      this->onClientDisconnected(client);
      break;

    default:
      break;
  }
}

void WebsocketRobotController::onClientConnected(AsyncWebSocketClient* client) {
  if (this->connectedClient != nullptr) {
    client->close(-1, "Another controller already connected");
    return;
  }

  this->connectedClient = client;
}

void WebsocketRobotController::onReceivedData(uint8_t* data, size_t len) {
  // Response from websocket is not null terminated string
  // So we are making it using std::string

  static std::string dataStr;  // static for memory optimization (smaller number of allocations)
  dataStr.clear();
  dataStr.assign((char*)data, len);

  // The command format is X:100 where left side is if robot runs forward/reverse or turns
  // And the right side is speed
  // So we can write simple parser for it

  size_t colonPosition = dataStr.find_first_of(":");
  std::string command = dataStr.substr(0, colonPosition);
  std::string speed = dataStr.substr(colonPosition + 1);

  // std::string has SSO so no heap is used

  char* end = nullptr;
  int32_t speedInt = std::strtol(speed.c_str(), &end, 10);

  if (command == "X") {
    this->service.setLeftMotorSpeed(speedInt);
    this->service.setRightMotorSpeed(speedInt);
  }

  if (command == "Y") {
    if (speedInt == 0) {
      this->service.clearOffsets();
      return;
    }

    this->service.increaseLeftMotorOffset(speedInt);
    this->service.increaseRightMotorOffset(-speedInt);
  }
}
void WebsocketRobotController::onClientDisconnected(AsyncWebSocketClient* client) {
  if (this->connectedClient == client) {
    this->connectedClient = nullptr;
  }
}
