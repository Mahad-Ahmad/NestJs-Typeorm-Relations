ARG BASE=node:20

FROM ${BASE} AS dependencies
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD node index.js