# Use the official Node.js image as a base
FROM node:20-alpine3.16

# Set the working directory inside the container
WORKDIR /api-gateway

# Copy the package.json and package-lock.json first to take advantage of Docker's cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code (including dist or build folder) into the container
# Make sure the dist folder is generated before this step in your build process
COPY . .

# Build the project (this step is required if you need to generate the dist folder)
RUN npm run build

# Expose the port your app will run on
EXPOSE 5000

# Set environment variables (these can also be set at runtime using -e flags in the `docker run` command)
# If you are using GitHub secrets, they will be passed during the GitHub Actions workflow.
ENV PORT=5000
ENV AUTH_SERVICE_URL=${AUTH_SERVICE_URL}
ENV COMPILE_SERVICE_URL=${COMPILE_SERVICE_URL}
ENV CORS_ORIGIN=${CORS_ORIGIN}
# ENV LOKI_HOST=${LOKI_HOST}


# Command to run your app inside the container (this assumes your built app is in dist/)
CMD ["node", "dist/index.js"]
