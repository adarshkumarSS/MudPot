# 🌿 Plant Monitor - React Native Expo App

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

A mobile app that monitors plant conditions by displaying real-time temperature and humidity data from Firebase Realtime Database.

## 📱 Screenshot
![App Screenshot](./assets/screenshot.png) *(Add screenshot later)*

## ✨ Features
- Real-time plant monitoring
- Temperature and humidity display
- Automatic refresh every 5 seconds
- Clean and intuitive UI
- Cross-platform (Android, iOS, Web)
- Simple Firebase integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended) or yarn
- Expo Go app (for mobile testing)
- Firebase account

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/plant-monitor.git
   cd plant-monitor

   npm install
   # or
   yarn install
   ```
Set up environment variables
Create a .env file:

FIREBASE_URL=https://your-project.firebaseio.com
FIREBASE_AUTH=your-database-secret

🔧 Configuration
Set up Firebase:

Create project at Firebase Console

Enable Realtime Database

Set security rules:
```json
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```
Update Firebase credentials in .env file

🏃 Running the App
```bash
# Android
npx expo start --android

# iOS
npx expo start --ios

# Web
npx expo start --web
```

🛠️ Built With
Expo - Framework for universal apps

React Native - Native app development

Firebase - Realtime database

🤝 Contributing
Contributions are welcome! Please open an issue or submit a PR.

⚠️ Troubleshooting
Expo errors: Try npx expo start -c to clear cache

Firebase connection: Verify your credentials in .env

Dependency issues: Delete node_modules and package-lock.json then reinstall

Created with ❤️ for healthy plants everywhere 🌱


