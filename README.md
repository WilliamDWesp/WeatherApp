# Weather_App
For Enterprise Class

Commands to run to get app working:

npm init  
npm install express --save  
npm install dotenv 
node index.js

Things needed to add:
.env file with port=enter the port here!


to run as a service:

sudo npm install pm2 -g
sudo pm2 start ./index.js
sudo pm2 startup systemd
sudo pm2 save 
