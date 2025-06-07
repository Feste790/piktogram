FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./ 
RUN npm install --silent  

COPY . .
RUN npm run build --silent

CMD ["npx", "serve", "-s", "build"]