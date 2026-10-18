@echo off
setlocal

REM Find the directory containing this script
set "PROJECT=%~dp0"

REM Remove trailing backslash if present
if "%PROJECT:~-1%"=="\" set "PROJECT=%PROJECT:~0,-1%"

REM Project directories
set "FRONTEND=%PROJECT%\frontend"
set "BACKEND=%PROJECT%\backend"
set "PIXEL_STREAMING=%PROJECT%\PixelStreamingInfrastructure\SignallingWebServer"

echo Starting Force Simulator...

REM 1. Start Pixel Streaming
start "Pixel Streaming" cmd /k "cd /d "%PIXEL_STREAMING%" && npm run start"

REM 2. Start React frontend
start "React Frontend" cmd /k "cd /d "%FRONTEND%" && npm run dev"

REM 3. Start FastAPI backend
start "FastAPI Backend" cmd /k "cd /d "%BACKEND%" && call .venv\Scripts\activate.bat && uvicorn app.main:app --reload"

echo Startup commands launched!

endlocal