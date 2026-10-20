#!/usr/bin/env bash
set -euo pipefail

# Resolve the repository root from this script's location.
PROJECT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND="$PROJECT/backend"
FRONTEND="$PROJECT/frontend"

echo "Setting up Force Simulator..."

# Check required tools.
if ! command -v uv >/dev/null 2>&1; then
    echo "Error: uv is not installed."
    echo "Install it from https://docs.astral.sh/uv/getting-started/installation/"
    exit 1
fi

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
    echo "Error: Node.js and npm are required."
    echo "Install Node.js from https://nodejs.org/"
    exit 1
fi

# Install backend dependencies.
echo "Installing backend dependencies..."
cd "$BACKEND"

uv python install 3.11
uv sync --python 3.11 --locked

# Install frontend dependencies.
echo "Installing frontend dependencies..."
cd "$FRONTEND"

npm ci

echo "Force Simulator setup complete"