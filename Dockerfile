# build the app
# FROM mhart/alpine-node AS builder
# WORKDIR /app
# COPY . .
# RUN yarn install
# RUN yarn run build 
# RUN yarn run pkg

# # install the app on a streamlined image
# FROM alpine
# RUN apk update && \
#     apk add --no-cache libstdc++ libgcc ca-certificates && \
#     rm -rf /var/cache/apk/*
# WORKDIR /app
# COPY --from=builder /app/pkg .
# CMD ./payload-pro

FROM node:10.11-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 3000

RUN npm build

CMD [ "npm", "start" ]
