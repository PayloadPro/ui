# Payload Pro UI

[![Maintainability](https://api.codeclimate.com/v1/badges/198a7ac42e648c4fb03f/maintainability)](https://codeclimate.com/github/PayloadPro/ui/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/198a7ac42e648c4fb03f/test_coverage)](https://codeclimate.com/github/PayloadPro/ui/test_coverage)

The PayloadPro UI container is a Docker container that contains the packaged node application that runs the UI at [payload.pro](https://payload.pro)

## Environment

When running the container you can use the following environment variables:

| ENV       | Description        | Default
| --------- | ------------------ | -------
| `API_URL` | A link to the API  | `http://localhost:8081`
| `PORT`    | The port to run on | `3000`
| `UI_URL`  | A link to the UI   | `http://localhost:3000`
