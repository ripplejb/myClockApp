#! /bin/sh
chromium --user-data-dir=$(mktemp -d) --kiosk ./test.html
