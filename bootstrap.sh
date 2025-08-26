#!/bin/bash

# Portfolio Site Bootstrap Script
# This script sets up and starts the development server

set -e  # Exit on any error

echo "🚀 Starting Portfolio Site Bootstrap..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project directory."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔧 Checking for any outdated packages..."
npm audit --audit-level moderate || echo "⚠️  Some packages may need updates, but continuing..."

echo ""
echo "🌐 Starting development server..."
echo "   The site will open automatically in your browser at http://localhost:3000"
echo "   Press Ctrl+C to stop the server"
echo ""

# Check Node.js version for compatibility info
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)

if [ "$NODE_VERSION" -ge 17 ]; then
    echo "🔧 Detected Node.js v$NODE_VERSION - Using legacy OpenSSL provider for compatibility"
fi

# Start the development server
npm start
