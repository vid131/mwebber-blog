# Stage 1: Build the static HTML site using the comprehensive HugoMods Extended image
FROM hugomods/hugo:latest AS builder
WORKDIR /src
COPY . .
# Compile the static assets natively
RUN hugo --minify

# Stage 2: Serve the static files using Nginx
FROM nginx:alpine
COPY --from=builder /src/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]