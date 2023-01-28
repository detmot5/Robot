#include "RobotService.hpp"

void RobotService::init(const MotorHwData& leftMotorData, const MotorHwData& rightMotorData) {
  this->leftMotor = std::unique_ptr<Motor>(new Motor(leftMotorData));
  this->rightMotor = std::unique_ptr<Motor>(new Motor(rightMotorData));

  this->leftMotor->init();
  this->rightMotor->init();
}

void RobotService::updateMotors() {
  this->leftMotor->run(this->leftMotorSpeed + this->leftMotorOffset);
  this->rightMotor->run(this->rightMotorSpeed + this->rightMotorOffset);
}

void RobotService::setLeftMotorSpeed(int16_t speed) {
  this->leftMotorSpeed = speed;
  this->updateMotors();
}
void RobotService::setRightMotorSpeed(int16_t speed) {
  this->rightMotorSpeed = speed;
  this->updateMotors();
}

void RobotService::increaseLeftMotorOffset(uint16_t offset) {
  this->leftMotorOffset += offset;
  this->updateMotors();
}

void RobotService::increaseRightMotorOffset(uint16_t offset) {
  this->rightMotorOffset += offset;
  this->updateMotors();
}

void RobotService::decreaseLeftMotorOffset(uint16_t offset) {
  this->leftMotorOffset -= offset;
  this->updateMotors();
}

void RobotService::decreaseRightMotorOffset(uint16_t offset) {
  this->rightMotorOffset -= offset;
  this->updateMotors();
}

void RobotService::clearOffsets() {
  this->rightMotorOffset = 0;
  this->leftMotorOffset = 0;
  this->updateMotors();
}
