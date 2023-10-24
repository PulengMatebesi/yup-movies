# Use the official Nginx image as the base
FROM nginx:alpine

# Copy the entire project directory to the Nginx document root
COPY . /usr/share/nginx/html

# Expose port 80 (default for HTTP)
EXPOSE 80
