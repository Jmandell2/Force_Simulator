#!/bin/bash

# Stop if a command fails during setup
set -e

# Project directories
PROJECT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND="$PROJECT/frontend"
BACKEND="$PROJECET/backend"
PIXEL_STREAMING="$PROJECT/PixelStreamingInfrastructure/SignallingWebServer"


echo "Starting Force Simulator..."


# Start Pixel Streaming
osascript -e "tell application \"Terminal\" to do script \"cd '$PIXEL_STREAMING' && npm run start\""


# Start React frontend
osascript -e "tell application \"Terminal\" to do script \"cd '$FRONTEND' && npm run dev\""


# start backend
osascript -e "tell application \"Terminal\" to do script \"cd '$BACKEND' && source .venv/bin/activate && uvicorn app.main:app --reload\""
