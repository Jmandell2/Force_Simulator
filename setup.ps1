$ErrorActionPreference = "Stop"

# Resolve the repository root from this script's location.
$Project = $PSScriptRoot
$Backend = Join-Path $Project "backend"
$Frontend = Join-Path $Project "frontend"

Write-Host "Setting up Force Simulator..." -ForegroundColor Cyan

# Check required tools.
if (-not (Get-Command uv -ErrorAction SilentlyContinue)) {
    Write-Error "uv is not installed. Install it from https://docs.astral.sh/uv/getting-started/installation/"
    exit 1
}

if (-not (Get-Command node -ErrorAction SilentlyContinue) -or
    -not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js and npm are required. Install them from https://nodejs.org/"
    exit 1
}

# Set up the Python backend.
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow

Set-Location $Backend

uv python install 3.11
if ($LASTEXITCODE -ne 0) { throw "Failed to install Python 3.11." }

uv sync --python 3.11 --locked
if ($LASTEXITCODE -ne 0) { throw "Failed to install backend dependencies." }

# Set up the React frontend.
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow

Set-Location $Frontend

npm ci
if ($LASTEXITCODE -ne 0) { throw "Failed to install frontend dependencies." }

Set-Location $Project

Write-Host "Force Simulator setup complete!" -ForegroundColor Green