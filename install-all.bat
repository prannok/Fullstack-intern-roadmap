@echo off
echo ========================================================
echo Installing dependencies for all Fullstack projects...
echo ========================================================

for %%d in (week1-ts-basic week2-nextjs week3-nestjs product-store-api) do (
    if exist "%%d\package.json" (
        echo.
        echo ----------------------------------------------------
        echo [%%d] Running npm install...
        echo ----------------------------------------------------
        cd "%%d"
        call npm install
        cd ..
    )
)

echo.
echo ========================================================
echo All dependencies installed successfully! Ready to run.
echo ========================================================
pause
