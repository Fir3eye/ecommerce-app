# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install a simple web server to serve the static files
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "build"]
