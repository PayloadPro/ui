# build environment
FROM mhart/alpine-node AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build 
RUN yarn run pkg

# Dockerfile - stage 2
FROM alpine
RUN apk update && \
    apk add --no-cache libstdc++ libgcc ca-certificates && \
    rm -rf /var/cache/apk/*
WORKDIR /app
COPY --from=builder /app/pkg .
CMD ./next-app
