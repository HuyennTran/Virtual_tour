#!/bin/bash

# Paths and parameters
SERVER_EXEC="../../../nghttp2-1.64.0/src/nghttpd"
SERVER_DIRECTORY="/home/thow/NM/NHAPMON/vrtour/"
SERVER_PORT=12345
SERVER_IP=10.42.0.1
KEY_FILE="../../../ngtcp2/server.key"
CERT_FILE="../../../ngtcp2/server.cert"


# Function to start nghttp2 server
start_nghttp2_server() {
  echo "Starting nghttp2 server IP $SERVER_IP on port $SERVER_PORT with directory $SERVER_DIRECTORY..."
  
  # Start the nghttp2 server
  $SERVER_EXEC -a $SERVER_IP -d "$SERVER_DIRECTORY" $SERVER_PORT $KEY_FILE $CERT_FILE \
    

  if [ $? -eq 0 ]; then #If the last process equals 0, then the process was successful
    echo "nghttp2 server started successfully!"
  else
    echo "Failed to start nghttp2 server. Please check your configuration."
    exit 1 #Otherwise, exit with 1
  fi
}

# Call the function to start the server
start_nghttp2_server