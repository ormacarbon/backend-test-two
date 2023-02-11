FROM golang:1.19-alpine

WORKDIR /app


COPY go.mod ./
COPY go.sum ./


RUN go mod download

COPY . .

RUN go build -o app

EXPOSE 5000

RUN chmod +x ./app

CMD [ "./app" ]