#!/bin/bash

# Set up directories
EXTERNAL_DRIVE="/Volumes/dydact"
DEV_TOOLS="$EXTERNAL_DRIVE/dev-tools"
NPM_DIR="$DEV_TOOLS/npm"
PYTHON_DIR="$DEV_TOOLS/python"
BREW_DIR="$DEV_TOOLS/homebrew"
AWS_CLI_DIR="$DEV_TOOLS/aws-cli"

# Create directories
mkdir -p "$NPM_DIR"
mkdir -p "$PYTHON_DIR"
mkdir -p "$BREW_DIR"
mkdir -p "$AWS_CLI_DIR"

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Install Homebrew if not installed
if ! command_exists brew; then
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    eval "$($BREW_DIR/bin/brew shellenv)"
fi

# Install npm if not installed
if ! command_exists npm; then
    echo "Installing npm..."
    brew install node
fi

# Install Python if not installed
if ! command_exists python3; then
    echo "Installing Python..."
    brew install python
fi

# Set npm config
npm config set prefix "$NPM_DIR"
npm config set cache "$DEV_TOOLS/npm-cache"

# Install global npm packages
npm install -g npm@latest
npm install -g typescript
npm install -g @aws-amplify/cli

# Install pip packages
python3 -m pip install --upgrade pip
python3 -m pip install virtualenv

# Install AWS CLI
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "$DEV_TOOLS/AWSCLIV2.pkg"
sudo installer -pkg "$DEV_TOOLS/AWSCLIV2.pkg" -target "$DEV_TOOLS"
rm "$DEV_TOOLS/AWSCLIV2.pkg"

# Add paths to .bashrc or .zshrc
SHELL_RC="$HOME/.$(basename $SHELL)rc"
echo "export PATH=\"$DEV_TOOLS/bin:$NPM_DIR/bin:$PYTHON_DIR/bin:$BREW_DIR/bin:$AWS_CLI_DIR/aws-cli:\$PATH\"" >> "$SHELL_RC"
echo "export HOMEBREW_PREFIX=\"$BREW_DIR\"" >> "$SHELL_RC"
echo "export HOMEBREW_CELLAR=\"$BREW_DIR/Cellar\"" >> "$SHELL_RC"
echo "export HOMEBREW_REPOSITORY=\"$BREW_DIR\"" >> "$SHELL_RC"
echo "export MANPATH=\"$BREW_DIR/share/man:\$MANPATH\"" >> "$SHELL_RC"
echo "export INFOPATH=\"$BREW_DIR/share/info:\$INFOPATH\"" >> "$SHELL_RC"

# Install project dependencies
cd "/Volumes/dydact/dydact/labs/SiteAwareMVP/SiteAware"
npm install

# Install Amplify backend dependencies
cd "amplify/backend"
npm install

echo "Setup complete. Please restart your terminal or run 'source $SHELL_RC' to apply the changes."

# Instructions for Cursor
echo "To configure Cursor to use these development tools:"
echo "1. Open Cursor preferences"
echo "2. Go to the 'Environment' section"
echo "3. Set the PATH to include: $DEV_TOOLS/bin:$NPM_DIR/bin:$PYTHON_DIR/bin:$BREW_DIR/bin:$AWS_CLI_DIR/aws-cli"
echo "4. Set any other necessary environment variables (like HOMEBREW_PREFIX) as needed"

# Update VS Code settings for Cursor
CURSOR_SETTINGS_DIR="$HOME/Library/Application Support/Cursor/User"
CURSOR_SETTINGS_FILE="$CURSOR_SETTINGS_DIR/settings.json"

mkdir -p "$CURSOR_SETTINGS_DIR"

if [ ! -f "$CURSOR_SETTINGS_FILE" ]; then
    echo "{}" > "$CURSOR_SETTINGS_FILE"
fi

# Function to update JSON settings
update_json_setting() {
    local key="$1"
    local value="$2"
    local file="$3"
    local tmp_file=$(mktemp)
    
    if [ "$(uname)" == "Darwin" ]; then
        # macOS version (using sed)
        sed -i '' "s|\"$key\":.*|\"$key\": $value,|" "$file" 2>/dev/null || \
        sed -i '' "$ s/}$/,\n  \"$key\": $value\n}/" "$file" 2>/dev/null || \
        echo "{\"$key\": $value}" > "$file"
    else
        # Linux version (using sed)
        sed -i "s|\"$key\":.*|\"$key\": $value,|" "$file" 2>/dev/null || \
        sed -i "$ s/}$/,\n  \"$key\": $value\n}/" "$file" 2>/dev/null || \
        echo "{\"$key\": $value}" > "$file"
    fi
}

# Update Cursor settings
update_json_setting "terminal.integrated.env.osx.PATH" "\"$DEV_TOOLS/bin:$NPM_DIR/bin:$PYTHON_DIR/bin:$BREW_DIR/bin:$AWS_CLI_DIR/aws-cli:\${env:PATH}\"" "$CURSOR_SETTINGS_FILE"
update_json_setting "terminal.integrated.env.osx.HOMEBREW_PREFIX" "\"$BREW_DIR\"" "$CURSOR_SETTINGS_FILE"
update_json_setting "terminal.integrated.env.osx.HOMEBREW_CELLAR" "\"$BREW_DIR/Cellar\"" "$CURSOR_SETTINGS_FILE"
update_json_setting "terminal.integrated.env.osx.HOMEBREW_REPOSITORY" "\"$BREW_DIR\"" "$CURSOR_SETTINGS_FILE"

echo "Cursor settings updated. Please restart Cursor to apply the changes."