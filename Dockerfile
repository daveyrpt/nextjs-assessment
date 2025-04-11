FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Run the seed command to populate the database
RUN npm run seed

# Expose port 3000
EXPOSE 3000

# Set the default command to run the Next.js application
CMD ["npm", "run", "dev"]
