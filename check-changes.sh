#!/bin/bash

# Get the directories to check
DIRECTORY=$1

# Get the current and previous commit SHAs
CURRENT_SHA=$VERCEL_GIT_COMMIT_SHA
PREVIOUS_SHA=$VERCEL_GIT_PREVIOUS_COMMIT_SHA

# Fallback for first deployment when PREVIOUS_SHA might not be available
if [ -z "$PREVIOUS_SHA" ]; then
  PREVIOUS_SHA=$(git rev-list --max-parents=0 HEAD)
fi

# Check for changes in the specified directory
if git diff --name-only $PREVIOUS_SHA..$CURRENT_SHA | grep "^$DIRECTORY"; then
  echo "Changes detected in $DIRECTORY"
  exit 1
else
  echo "No changes detected in $DIRECTORY"
  exit 0
fi
