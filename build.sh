#!/bin/bash
sed -i 's/listen 80/listen 5000/g' /etc/nginx/sites-available/default 
sed -i 's/listen \[\::\]\:80/listen \[\::\]\:5000/g' /etc/nginx/sites-available/default 
sed -i 's+root /var/www/html+root /src+g' /etc/nginx/sites-available/default 
npm install
node --max-old-space-size=1024 ./node_modules/@angular/cli/bin/ng build --prod
cp -rf dist/app-front-end/* /src
exit 0
