#pragma once

#include <memory>

#include "Motor.hpp"

// This class will be owner of both Motors and will be interface for actual controllers
// In our case - Websocket controller
class RobotService {
 public:
  void init(const MotorHwData& leftMotorData, const MotorHwData& rightMotorData);

  void updateMotors();

  void setLeftMotorSpeed(int16_t speed);
  void setRightMotorSpeed(int16_t speed);

  void increaseLeftMotorOffset(uint16_t offset);
  void increaseRightMotorOffset(uint16_t offset);

  void decreaseLeftMotorOffset(uint16_t offset);
  void decreaseRightMotorOffset(uint16_t offset);

  void clearOffsets();

 private:
  std::unique_ptr<Motor> leftMotor = nullptr;
  std::unique_ptr<Motor> rightMotor = nullptr;

  int16_t leftMotorSpeed = 0;
  int16_t rightMotorSpeed = 0;

  int16_t leftMotorOffset = 0;
  int16_t rightMotorOffset = 0;
};