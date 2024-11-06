# Stage 1: Build the application
FROM node:18 AS builder

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install -f

# Copy the rest of the application code
COPY . .

# Build the application (adjust the build command as needed for your project)
RUN pnpm build

# Stage 2: Production image
FROM node:18-alpine AS runner

# Install pnpm in the runner stage as well
RUN npm install -g pnpm

# Set environment variable for production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist       # Change /dist to your app's output directory if different
COPY --from=builder /app/node_modules ./node_modules

# Expose the app's port (change if different)
EXPOSE 3000

# Run the application (adjust the start command if different)
CMD ["pnpm", "start"]
