#!/bin/sh

Color_Off='\033[0m'       # Text Reset
Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green

for FILE_PATH in ./test/data/certs/*cert*.pem
do
    node ./test/tester.js $FILE_PATH > /dev/null
    if [ $? -ne 0 ]; then
        echo "${Red}FAILED${Color_Off} ${FILE_PATH}"
    else
        echo "${Green}PASSED${Color_Off} ${FILE_PATH}"
    fi
done