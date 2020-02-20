# Coding Challenge

## Introduction
**TODO: fill out**

## Objective
**TODO: fill out**

## Setup Instructions
### Prerequistes
- Docker
  - If you don't already have docker you can download and install it from the following links:
    - [mac](https://www.docker.com/docker-mac)
    - [windows](https://www.docker.com/docker-windows)
    - [linux](https://runnable.com/docker/install-docker-on-linux)
  - For those of you on Windows or a Mac: increase the memory allocated to docker to at least 4GB. This setting can be found within docker's preferences. Feel free to reach out if you don't have that much memory available on your machine. Linux users don't need to worry about this because there's no virtual machine running between your host OS and your docker containers.

### Setup
![setup](/gif/setup.gif)

1. Fork this repository, clone it down and cd into it.
2. From within the `coding-challenge` directory, run `./bin/dev`
3. Once the output is done printing, open a new terminal tab and run the following commands:
    ```bash
    cd /path/to/coding-challenge
    docker exec -it api bash 
    cd code
    node src
    ```
    - This is equivalent to `ssh`'ing into a virtual machine that has nodejs installed along with the current directory bind-mounted as a volume. This means you can use your favorite code editor to work on the the challenge and the changes will be mirrored in the container
4. **TODO: fill out**

### Running Benchmark
![benchmark](/gif/benchmark.gif)
**TODO: fill out**

## Cleanup and Submission
![teardown](/gif/teardown.gif)

- Once you're done, from within the `coding-challenge` directory, run `./bin/teardown` in order to delete all containers and volumes
- Send over an email with a link to your forked repo and we'll take a look ASAP!

## Hints
TODO: fill out

Good Luck!