#pragma once
#include <stdint.h>

struct MotorHwData {
  uint8_t forwardPin;
  uint8_t reversePin;
  uint8_t pwmPin;
  uint8_t pwmChannelNumber;
};

class Motor {
 public:
  explicit Motor(const MotorHwData& data) : data(data) {}

  void init();
  void run(int16_t speed);
  void stop();

  inline int16_t getSpeed() { return this->speed; }

 private:
  void writePwm(uint16_t pwmValue);
  void setDirectionForward();
  void setDirectionReverse();

 private:
  MotorHwData data;
  int16_t speed = 0;
};