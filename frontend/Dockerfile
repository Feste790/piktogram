FROM node:22

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./ 
RUN npm install -g npm@latest && npm install --no-optional

COPY . .
RUN npm run build

CMD ["npx", "serve", "-s", "build"]