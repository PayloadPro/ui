# Payload Pro UI

The PayloadPro UI container is a Docker container that contains the packaged node application that runs the UI at [payload.pro](https://payload.pro)

## Environment

When running the container you can use the following environment variables:

| ENV       | Description        | Default
| --------- | ------------------ | -------
| `API_URL` | A link to the API  | `http://localhost:8081`
| `PORT`    | The port to run on | `3000`
| `UI_URL`  | A link to the UI   | `http://localhost:3000`
