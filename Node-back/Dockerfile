#base image
FROM node:20-alpine

RUN npm install -g nodemon

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

#copy all files to the container
COPY . .

# Expose the port the app runs in
EXPOSE 5001

# Serve the app
CMD ["npm", "run", "start"]
 