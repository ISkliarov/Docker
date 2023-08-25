### Simple Node app that return ip of container

# Build
docker build -t node-app .

# Run container
docker run -d -p 3000:3000 node-app