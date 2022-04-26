from gpiozero import Servo
from time import sleep
from gpiozero.pins.pigpio import PiGPIOFactory


factory = PiGPIOFactory()
servo = Servo(12, min_pulse_width=0.5/1000, max_pulse_width=2.5/1000, pin_factory=factory)

print("Closed")
servo.min()
sleep(5)

print("Started Feeding")
servo.mid()
sleep(5)

print("Stopped Feeding")
servo.min()
sleep(5)

servo.value = None