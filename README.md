# HelloAPI

This is just a stupid API that responds greetings in a lot of different ways - not useful, only for demo purposes.


## Documentation

### Environment Variables
```yaml
HelloApiTier: production
HelloApiCode: ytM4dl4hcrMopQups0nz
```

### Hi

Returns `Hello` in `data` field.
```text
computer > curl -X GET http://localhost:5000/api/hi -i
HTTP/1.1 200 OK

{"data":"hello","err":""}
```

### Yo

Returns `wassup` in `data` field.
```text
computer > curl -X GET http://localhost:5000/api/yo -i
HTTP/1.1 200 OK

{"data":"wassup","err":""}
```

### General Error

Returns `ERROR` in the `error` field.
```text
computer > curl -X GET http://localhost:5000/api/ayyo -i
HTTP/1.1 200 OK

{"data":"","err":"ERROR"}
```

### Docker Run

Create a docker container of this app by running:
```text
docker pull ghcr.io/mrkresnofatih/ghcr.io/mrkresnofatih/hello-api:v1.0.1
docker run -d --name MyHelloApi -p 3000:5000 -e HelloApiTier=prod -e HelloApiCode=ytM4dl4hcr ghcr.io/mrkresnofatih/ghcr.io/mrkresnofatih/hello-api:v1.0.1
```
