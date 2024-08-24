FROM node:22-alpine3.19
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --verbose
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview" ]
