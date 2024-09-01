@echo off
Title GitPusher

@REM git add . 
@REM git commit -m "UpDate Project."
@REM git pull origin main
@REM git commit -m "Merge remote changes"
@REM git push origin main

@REM git remote add origin https://github.com/SaLaMaNdeR-81/WalletState.git
@REM git branch -M main
@REM git push -u origin main

@REM echo "# WalletState" >> README.md
@REM git init
@REM git add README.md
@REM git commit -m "first commit"
@REM git branch -M main
@REM git remote add origin https://github.com/SaLaMaNdeR-81/WalletState.git
@REM git push -u origin main

REM Ensure the latest changes from the remote repository are pulled
git pull origin main

REM Add all changes to the staging area, respecting the .gitignore file
git add .

REM Commit the changes with a message
echo Enter the commit message:
set /p commitMessage=
git commit -m "%commitMessage%"

REM Push the changes to the remote repository
git push origin main

REM Confirmation message
echo Changes pushed to GitHub successfully!

pause