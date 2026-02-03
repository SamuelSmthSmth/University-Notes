#!/bin/bash

# --- CONFIGURATION (EDIT THESE!) ---
QUARTZ_DIR="/home/samuel/.quartz"              # Path to your Quartz folder
NOTES_DIR="/home/samuel/Documents/Obsidian/University" # Path to your Notes folder
LAST_RUN_FILE="$QUARTZ_DIR/.last_sync"         # Leave this as is
# -----------------------------------

# 1. Create the timestamp file if it doesn't exist yet
if [ ! -f "$LAST_RUN_FILE" ]; then
    touch "$LAST_RUN_FILE" -d "1 year ago"
fi

# 2. Find any file in NOTES_DIR that is NEWER than LAST_RUN_FILE
# We exclude hidden files (starting with .) to avoid syncing config noise
CHANGED_FILES=$(find "$NOTES_DIR" -type f -newer "$LAST_RUN_FILE" -not -path '*/.*' | head -n 1)

if [ -z "$CHANGED_FILES" ]; then
    # No changes found
    echo "💤 No changes detected. Skipping sync."
    exit 0
else
    # Changes found!
    echo "✨ Changes detected in: $CHANGED_FILES"
    echo "🚀 Starting Quartz Sync..."
    
    # Update timestamp so we don't sync these changes again next time
    touch "$LAST_RUN_FILE"

    # Run the sync
    cd "$QUARTZ_DIR" || exit
    /usr/bin/npx quartz sync --no-pull
fi