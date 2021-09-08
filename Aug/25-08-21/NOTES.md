If MongoDB does not connect >>

hadi said that it might happen sometimes.

1. stop mongo >>

sudo service mongod stop

(type in password for laptop if it asks)


2. start mongo >>

sudo systemctl start mongod

sudo systemctl daemon-reload


check status of connection >>

sudo systemctl status mongod

"active (running)" means it is good


optional extra step: system reboot >>

sudo systemctl enable mongod


3. quit and reopen mongo app (edited) 


OR restart your device/laptop/computer