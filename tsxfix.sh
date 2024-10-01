#!/bin/bash

# Find and list all .tsx files
echo "The following .tsx files will be removed:"
find . -name "*.tsx" -type f

# Ask for confirmation
read -p "Do you want to proceed with deletion? (y/n) " -n 1 -r
echo    # Move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Remove the files
    find . -name "*.tsx" -type f -delete
    echo "All .tsx files have been removed."
else
    echo "Operation cancelled. No files were removed."
fi
