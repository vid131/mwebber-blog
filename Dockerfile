# Stage 1: Build the static HTML site using the official Hugo Extended image tag
FROM ghcr.io/gohugoio/hugo:latest-extended AS builder
WORKDIR /src
COPY . .
# Run the compilation with an explicit source target path
RUN hugo --minify --source /src

# Stage 2: Serve the static files using Nginx
FROM nginx:alpine
COPY --from=builder /src/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]