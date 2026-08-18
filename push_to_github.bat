@echo off
set PATH=C:\Program Files\Git\cmd;%PATH%

echo =======================================================
echo   SSB GROUP PLATFORM - PUSH TO GITHUB (Anay8255)
echo =======================================================
echo.

set /p REPO_NAME="Enter your GitHub Repository Name (e.g. ssb-project or ssb-infra): "

if "%REPO_NAME%"=="" (
    echo [ERROR] Repository name cannot be empty.
    pause
    exit /b
)

echo.
echo Setting remote URL to: https://github.com/Anay8255/%REPO_NAME%.git ...
git remote remove origin 2>nul
git remote add origin https://github.com/Anay8255/%REPO_NAME%.git

echo Staging any recent changes...
git add .
git commit -m "Update SSB Group platform" 2>nul

echo.
echo Pushing code to main branch on GitHub...
echo (If prompted, log in with your GitHub account / Personal Access Token)
git branch -M main
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo =======================================================
    echo   SUCCESS! Your project is now live on GitHub:
    echo   https://github.com/Anay8255/%REPO_NAME%
    echo =======================================================
) else (
    echo [NOTE] If push failed, make sure you created the repo '%REPO_NAME%' on https://github.com/new first.
)

echo.
pause
