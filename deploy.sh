#!/bin/bash

# Exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print status messages
print_status() {
    echo -e "${BLUE}==>${NC} $1"
}

# Function to print success messages
print_success() {
    echo -e "${GREEN}==>${NC} $1"
}

print_status "🚀 Starting deployment process..."

# Change to client/dist directory
print_status "📂 Changing to client/dist directory..."
cd client/dist

# Deploy to Vercel with automated responses
print_status "🚀 Deploying to Vercel..."
echo "y
y
zeenpipelines" | vercel --prod

print_success "✅ Deployment complete!"
print_success "Your application has been successfully deployed to Vercel!"
