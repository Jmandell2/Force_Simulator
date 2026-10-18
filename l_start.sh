
#!/bin/bash

# Stop if a command fails during setup
set -e

# Find the directory containing this script
PROJECT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Project directories
FRONTEND="$PROJECT/frontend"
BACKEND="$PROJECT/backend"
PIXEL_STREAMING="$PROJECT/PixelStreamingInfrastructure/SignallingWebServer"

echo "Starting Force Simulator..."

# 1. Start Pixel Streaming in a separate terminal
gnome-terminal --title="Pixel Streaming" -- bash -c \
    "cd '$PIXEL_STREAMING' && npm run start; exec bash"

# 2. Start React frontend in a separate terminal
gnome-terminal --title="React Frontend" -- bash -c \
    "cd '$FRONTEND' && npm run dev; exec bash"

# 3. Start FastAPI backend in a separate terminal
gnome-terminal --title="FastAPI Backend" -- bash -c \
    "cd '$BACKEND' && source .venv/bin/activate && uvicorn app.main:app --reload; exec bash"

echo "Startup commands launched!"
