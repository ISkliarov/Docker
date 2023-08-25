### Docker testing projects with simple DockerFiles

# Build the Docker Image:

Navigate to the directory containing your Dockerfile and build the Docker image:

docker build -t my-app .

This command builds an image tagged as my-app from the current directory.

# Run the Docker Container:

Now, you can run a container from the image:

docker run -d -p 5001:5000 my-app

This command starts a Docker container named my-app and maps port 5001 on your host to port 5000 in the container.

