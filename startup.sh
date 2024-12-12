#!/bin/bash
if [ ! -d "/var/www/html/vendor" ]; then
    cp -r /vendor /var/www/html/vendor 
fi

rm -rf /vendor

apache2-foreground