# Use the official Node.js 20 slim image (Debian-based)
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5173 to the outside world
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "start"]
