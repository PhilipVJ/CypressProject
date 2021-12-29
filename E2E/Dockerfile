FROM cypress/base:latest
WORKDIR /e2e
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY cypress cypress/
COPY cypress.json .
COPY tsconfig.json .
RUN $(npm bin)/cypress verify
CMD [ "npm","run","cypress:run"]