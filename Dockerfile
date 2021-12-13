FROM node:14
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN yarn
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3333
CMD [ "yarn", "dev" ]