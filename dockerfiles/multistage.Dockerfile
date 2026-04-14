# Multi-stage Build Example for a Go Application

# Stage 1: Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Copy go.mod and go.sum first to leverage cache
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the source code
COPY . .

# Build the binary
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Stage 2: Final stage (lightweight)
FROM alpine:latest

WORKDIR /root/

# Copy only the binary from the builder stage
COPY --from=builder /app/main .

# Expose port and run
EXPOSE 8080
CMD ["./main"]
