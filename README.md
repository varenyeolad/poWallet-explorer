# poWallet Explorer

## Overview
poWallet Explorer is a web-based tool for checking the risk level of cryptocurrency addresses. It integrates with the SCAN SCAM API to provide users with security assessments.

![poWallet Explorer](assets/powallet_explorer.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features
- Web-based interface for checking address risk levels
- Integration with the SCAN SCAM API for real-time risk assessment
- User-friendly design
- Comprehensive logging and error handling

![Features](assets/features.png)

## Installation

### Prerequisites
- Node.js and npm

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/powallet-explorer.git
   cd powallet-explorer
2. Install the required dependencies:
    ```bash
    npm install
### Usage
1. Start the development server:
    ```bash
    npm run dev
2. Open your browser and go to http://localhost:3000.

Enter a wallet address to check its risk level.

The application will display the risk assessment based on the [SCAN SCAM API](https://github.com/varenyeolad/scan-fraud-ml).
