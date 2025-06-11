FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./ 
RUN npm install --no-optional

COPY . .
RUN ln -sf src/main.jsx src/index.jsx
RUN npm run build


EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]