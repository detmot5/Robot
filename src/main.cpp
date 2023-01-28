#include <Arduino.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>
#include <WiFi.h>

#include "Motor.hpp"
#include "StaticConfig.hpp"
#include "WebsocketRobotController.hpp"

AsyncWebServer server(80);

RobotService service;
WebsocketRobotController robotController("/robot", service);

MotorHwData leftMotorData = {LEFT_MOTOR_FORWARD_PIN, LEFT_MOTOR_REVERSE_PIN, LEFT_MOTOR_EN_PIN,
                             LEFT_MOTOR_PWM_CHANNEL};

MotorHwData rightMotorData = {RIGHT_MOTOR_FORWARD_PIN, RIGHT_MOTOR_REVERSE_PIN, RIGHT_MOTOR_EN_PIN,
                              RIGHT_MOTOR_PWM_CHANNEL};

void serveWebsite() {
  server.on("/", HTTP_GET, [](AsyncWebServerRequest* request) {
    request->send(SPIFFS, "/index.html", "text/html");
  });
  server.on("/build/bundle.js", HTTP_GET, [](AsyncWebServerRequest* request) {
    request->send(SPIFFS, "/build/bundle.js", "application/javascript");
  });
  server.on("/global.css", HTTP_GET, [](AsyncWebServerRequest* request) {
    request->send(SPIFFS, "/global.css", "text/css");
  });
  server.on("/build/bundle.css", HTTP_GET, [](AsyncWebServerRequest* request) {
    request->send(SPIFFS, "/build/bundle.css", "text/css");
  });
}

void setup() {
  Serial.begin(921600);
  SPIFFS.begin();
  WiFi.softAP("Robot", "dont-look-here-bro");

  serveWebsite();
  server.begin();
  service.init(leftMotorData, rightMotorData);
  robotController.attachTo(server);
}

void loop() {}
