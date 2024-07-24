# Use an official Node runtime as a parent image
FROM node:14
 
# Set the working directory
WORKDIR /src
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code to the working directory
COPY . .
 
# Build the React app
RUN npm run build
 
# Install a simple static file server
RUN npm install -g serve
 
# Command to run the app
CMD ["serve", "-s", "build"]
 
# Expose port 5000
EXPOSE 5000