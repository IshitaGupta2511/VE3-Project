# Stage 1: Build the application (Node.js example)
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY src/ src/
COPY server.js ./

# Build or prepare files (if needed, e.g., npm run build)

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove the default Nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built application from the first stage
COPY --from=build /app/src /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

