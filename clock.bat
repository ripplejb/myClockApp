REM --kiosk : for full screen
REM --disable-web-security : for cross domain ajax calls
REM --user-data-dir=c:\temp : create new temporary profile
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir=c:\temp   --disable-web-security file:\\"%cd%\test.html"