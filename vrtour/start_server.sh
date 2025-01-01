#!/bin/bash

# Paths and parameters
SERVER_EXEC="./src/nghttpd"
SERVER_DIRECTORY="/home/thow/PROJECT NHAP MON/vrtour/"
SERVER_PORT=12345
KEY_FILE="../ngtcp2/server.key"
CERT_FILE="../ngtcp2/server.cert"
CHROME_PATH="google-chrome"
CHROME_USER_DATA_DIR="/tmp/chrome_dev"

# Function to start nghttp2 server
start_nghttp2_server() {
  echo "Starting nghttp2 server on port $SERVER_PORT with directory $SERVER_DIRECTORY..."
  
  # Start the nghttp2 server
  $SERVER_EXEC -d "$SERVER_DIRECTORY" $SERVER_PORT $KEY_FILE $CERT_FILE \
    --add-response-header="Access-Control-Allow-Origin: *" \
    --add-response-header="Access-Control-Allow-Methods: GET, POST, OPTIONS"

  if [ $? -eq 0 ]; then
    echo "nghttp2 server started successfully!"
  else
    echo "Failed to start nghttp2 server. Please check your configuration."
    exit 1
  fi
}

# Function to launch Chrome with security disabled
launch_chrome() {
  echo "Launching Chrome with security features disabled for local testing..."
  
  $CHROME_PATH --disable-web-security --user-data-dir="$CHROME_USER_DATA_DIR" &

  if [ $? -eq 0 ]; then
    echo "Chrome launched successfully!"
  else
    echo "Failed to launch Chrome. Please check your Chrome installation."
    exit 1
  fi
}

# Main script execution
echo "==== Starting nghttp2 Server and Chrome for Local Development ===="
start_nghttp2_server &
launch_chrome

# Wait for user input to terminate
read -p "Press Enter to stop the nghttp2 server and close Chrome..."
pkill -f "$SERVER_EXEC"
pkill -f "$CHROME_PATH"
echo "nghttp2 server and Chrome processes terminated."

