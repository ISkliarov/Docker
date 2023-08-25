# Use the official Python image as a base image
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create and set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install -r requirements.txt

# Copy the application code into the container
COPY app.py .

# Expose the port that your Flask app will run on
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]