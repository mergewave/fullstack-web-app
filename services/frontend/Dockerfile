# Step 1: Use official Node image
FROM node:18 AS build

# Step 2: Set build-time env vars
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Step 3: Set working dir
WORKDIR /app

# Step 4: Copy everything including .env
COPY . .

# Step 5: Install dependencies and build
RUN npm install \
  && npm run build

# Step 6: Serve using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

