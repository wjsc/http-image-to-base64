# Run from Local

## Install dependencies
```
npm install
```

## Start server
```
npm run start
```

# Run using Docker

## Build image
```
docker build -t http-image-to-base64:1.0.0 .
```

## Execute container
```
 docker run -p3000:3000 http-image-to-base64:1.0.0 
```

# Test

## POST a file with curl
```
curl -F 'data=@tiger.jpg' http://localhost:3000/image
```