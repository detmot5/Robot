#pragma once

#include <ESPAsyncWebServer.h>

#include "RobotService.hpp"

class WebsocketRobotController {
 public:
  WebsocketRobotController(const char* url, RobotService& service)
      : wsServer(url), service(service) {}

  void attachTo(AsyncWebServer& server);

 private:
  void onWebsocketEvent(AsyncWebSocket* socker, AsyncWebSocketClient* client,
                        AwsEventType eventType, void* arg, uint8_t* data, size_t len);
  void onClientConnected(AsyncWebSocketClient* client);
  void onReceivedData(uint8_t* data, size_t len);
  void onClientDisconnected(AsyncWebSocketClient* client);

 private:
  AsyncWebSocket wsServer;
  AsyncWebSocketClient* connectedClient = nullptr;

  RobotService& service;
};
