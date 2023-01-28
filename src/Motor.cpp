#include "Motor.hpp"

#include <Arduino.h>

static constexpr uint8_t PWM_RESOLUTION_BITS = 8;
static constexpr uint8_t PWM_RESOLTION_HZ = 200;
static constexpr uint8_t PWM_OFFSET = 125;

void Motor::init() {
  pinMode(this->data.forwardPin, OUTPUT);
  pinMode(this->data.reversePin, OUTPUT);
  pinMode(this->data.pwmPin, OUTPUT);

  // setup esp32 pwm

  ledcSetup(this->data.pwmChannelNumber, PWM_RESOLTION_HZ, PWM_RESOLUTION_BITS);
  ledcAttachPin(this->data.pwmPin, this->data.pwmChannelNumber);

  digitalWrite(this->data.forwardPin, LOW);
  digitalWrite(this->data.reversePin, LOW);
}

void Motor::run(int16_t speed) {
  // positive number -> run forward
  // negative number -> run reverse

  if (speed == 0) {
    this->stop();
    return;
  }

  if (speed > 0) {
    this->setDirectionForward();
  }

  if (speed < 0) {
    this->setDirectionReverse();
  }

  // get absolute value of speed
  int16_t speedAbs = std::abs(speed);

  this->writePwm(speedAbs);

  this->speed = speedAbs;
}

void Motor::stop() {
  digitalWrite(this->data.reversePin, LOW);
  digitalWrite(this->data.forwardPin, LOW);
}

void Motor::writePwm(uint16_t pwmValue) { ledcWrite(this->data.pwmChannelNumber, pwmValue); }

void Motor::setDirectionForward() {
  digitalWrite(this->data.reversePin, LOW);
  digitalWrite(this->data.forwardPin, HIGH);
}

void Motor::setDirectionReverse() {
  digitalWrite(this->data.forwardPin, LOW);
  digitalWrite(this->data.reversePin, HIGH);
}