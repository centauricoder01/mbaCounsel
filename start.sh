#!/bin/bash

# Navigate to the project directory
cd /var/www/mbaCounsel || exit

# Build the project (optional if it's already built)
npm run build

# Serve the production build (you can use serve or any other static server)
npx serve -s build -l 3002  # Serve the build folder on port 3000 (or any port)

# Optional: If you're using pm2 to manage the frontend server, you can also add this
# pm2 start "npx serve -s build -l 3000" --name mbacounsel-frontend

# Then run this command to run from pm2 = pm2 restart start.sh --name mbacounsel-frontend