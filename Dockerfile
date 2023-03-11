FROM node:18-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R appuser:appgroup /app
EXPOSE 8080
USER appuser
CMD [ "npm", "start" ]
