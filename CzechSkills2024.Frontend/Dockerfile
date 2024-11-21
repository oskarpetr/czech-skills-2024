# Use the node:18-alpine image for a smaller image size
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the package.json and pnpm-lock.yaml from the frontend directory
COPY CzechSkills2024.Frontend/package.json ./
COPY CzechSkills2024.Frontend/pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files (frontend source files)
COPY CzechSkills2024.Frontend/ ./

# Expose port 3000 for the app
EXPOSE 3000

# Start the application using pnpm
CMD ["pnpm", "run", "dev"]