ARG BASE=node:20

FROM ${BASE} AS dependencies

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD node index.js

# We run `npm install` before copying all the files because we want to leverage Docker 
# caching. Each command in a Dockerfile creates a new layer, and if we change something 
# in the source files,  it will invalidate the cache for subsequent layers. By copying 
# only the package.json file and running `npm install`, if something changes in the 
# package.json file, it will trigger a rebuild of only this layer and subsequent layers. 
# This optimizes the Docker build process.
