FROM node:10.16.0-alpine
RUN apk add tzdata
ENV TZ=America/Buenos_Aires
WORKDIR /usr/app/
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
USER node
CMD [ "npm" , "start" ]
