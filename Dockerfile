# Stufe 1: Build-Phase
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./ 
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stufe 2: Produktions-Image
FROM node:18 AS production

# Set the working directory
WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json* ./ 
RUN npm install --only=production

# Copy build output from builder
COPY --from=builder /app/.next ./.next
COPY public ./public
COPY next.config.ts ./

# Expose Next.js default port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]