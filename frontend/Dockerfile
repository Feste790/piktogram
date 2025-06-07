FROM node:18

WORKDIR /frontend

COPY package.json ./
COPY package-lock.json ./ 
RUN npm install --silent  

COPY . .
RUN npm run build --silent

CMD ["npx", "serve", "-s", "build"]