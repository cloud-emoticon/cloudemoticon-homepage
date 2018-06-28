# Cloud Emoticon Website

## Build docker image

```bash
docker build . -t cloudemoticon/website
```

## Run
```bash
docker run -p 8000:8000 -d cloudemoticon/website
```

Then visit at localhost:8000

## TODO
* responsive on mobile
* i18n
* image placeholder