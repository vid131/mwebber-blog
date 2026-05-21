# Stage 1: Build the static HTML site using Hugo
FROM klakegg/hugo:ext-alpine AS builder
WORKDIR /src
COPY . .
RUN hugo --minify

# Stage 2: Serve the static files using a high-performance Nginx server
FROM nginx:alpine
COPY --from=builder /src/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]