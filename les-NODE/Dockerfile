#---------------------------------------------------
# Testing Dockerfile with Node.js application
#
# Made by Serhii Skliarov Date: 25 Aug 23
#---------------------------------------------------

# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application code into the container
COPY ./app.js .

# Install application dependencies
RUN npm install

# Expose the application's port
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]