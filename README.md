# Coding Challenge

## Introduction
At Blue Squad, we have several backend microservices (i.e. verifying voter registration) in place that typically get triggered by a user clicking on something in our mobile app (which leads to a request being sent to our API). In order to keep our user-experience as crisp as possible, our API responses need to be speedy and fault tolerant. This coding challenge exposes you to a single endpoint within an http api and tasks you with optimizing its sluggish performance

## Objective
- To reiterate, your goal is to service all requests being made to the endpoint provided as fast as possible, without losing any to timeouts or errors. We provide a simple tool to measure the performance of this endpoint which can be run using a single command (more on this in the setup section below). 

  ![benchmark](/gif/benchmark.gif)

- Specifically, within the `api` directory, you'll find a file named `server.js` which has an endpoint `POST /users` that handles user creation. It simply takes what the request body and inserts it into mongo and then runs a function called `somethingSlow` synchronously and then returns a response to the user. `somethingSlow` is a function that mocks the behavior/speed of a calling a potential microservice. This doesn't have to be done synchronously. Upon running the benchmark, you'll notice that the response times are quite slow and requests will often time out. You are being tasked with: 
  - reducing request latency
  - increasing the the number of requests handled per second 
  - reducing the number of failed requests (due to timeouts). 
- Achieving this may require you to leverage additional technologies (i.e. redis), which is something you're welcome and encouraged to do. 

## Setup Instructions
### Prerequisites
- Docker
  - If you don't already have docker you can download and install it from the following links:
    - [mac](https://www.docker.com/docker-mac)
    - [windows](https://www.docker.com/docker-windows)
    - [linux](https://runnable.com/docker/install-docker-on-linux)
  - For those of you on Windows or a Mac: increase the memory allocated to docker to at least 4GB. This setting can be found within docker's preferences. Feel free to reach out if you don't have that much memory available on your machine. Linux users don't need to worry about this because there's no virtual machine running between your host OS and your docker containers.

### Setup
![setup](/gif/setup.gif)

1. Fork this repository, clone it down and cd into it.
2. From within the `infra-coding-challenge` directory, run `./bin/dev`
3. Once the output is done printing, open a new terminal tab and run the following commands:
    ```bash
    cd /path/to/infra-coding-challenge
    docker exec -it api bash 
    cd code
    node src
    ```
    - This is equivalent to `ssh`'ing into a virtual machine that has nodejs installed along with the current directory bind-mounted as a volume. This means you can use your favorite code editor to work on the the challenge and the changes will be mirrored in the container. Running `node src` will start the http api
4. With the api running, in a separate terminal tab, run the benchmark tool we've provided to measure the performance of the endpoint
5. Make the endpoint faster and less prone to timing out

## Benchmark Tool
- The benchmark tool can be run from within the `infra-coding-challenge` directory by running `./bin/benchmark`. By default it uses 25 simultaneous connections to make as many requests as it can for 45 seconds. 
  - You can adjust these numbers by providing additional arguments to the command that runs the benchmark: `./bin/benchmark [num-connections] [duration]` 
    - ex: `./bin/benchmark 1000 30s`

## Cleanup and Submission
![teardown](/gif/teardown.gif)

- Once you're done, from within the `infra-coding-challenge` directory, run `./bin/teardown` in order to delete all containers and volumes
- Send over an email with a link to your forked repo and we'll take a look ASAP!

## Closing Words
- We will try your submission with 25, 50, 100, 500 and 1000 concurrent connections with varying durations. 
- Don't be afraid to submit your solution even if some requests are still timing out or if you feel that the throughput is still slow. Of course it's great if you can 0 out timeouts along with reducing latency and increasing throughput but effort in and of itself is something we value.
- Feel free to reach out!

Good Luck!