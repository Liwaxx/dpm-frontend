FROM telkomindonesia/alpine:nodejs-8.9.3

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN npm run build
ENV BABEL_DISABLE_CACHE=1 
EXPOSE 4000

CMD ["npm", "start"]
