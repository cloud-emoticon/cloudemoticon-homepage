FROM node:10

WORKDIR /app
COPY . /app
RUN npm install -g bower
RUN bower install --allow-root
RUN npm install http-server -g

EXPOSE 8000/tcp
ENTRYPOINT http-server -p 8000