# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY /weather-frontend/package*.json /app/

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY /weather-frontend /app

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]