FROM ubuntu

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nginx -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN apt-get install git -y
RUN git clone https://github.com/Skrymaster/NumeNeintuitiv2.git


RUN npm install express --save
RUN apt-get install -y apache2-utils