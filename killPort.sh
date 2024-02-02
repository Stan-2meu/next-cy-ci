#!/bin/bash

if [ -z "$1" ]
then
    echo "No port number supplied"
    exit 1
fi

PORT=$1

PID=$(lsof -ti :$PORT)

if [ -z "$PID" ]
then
    echo "No process is using port $PORT"
    exit 1
fi

echo "Killing process $PID that is using port $PORT"
kill -3 $PID

