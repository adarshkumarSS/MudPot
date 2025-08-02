# 🌿 Plant Monitor - React Native Expo App

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

A cross-platform mobile app that monitors plant conditions by displaying real-time temperature and humidity data from Firebase Realtime Database.

---

## 📸 Screenshot

*Add a screenshot here showing the app UI*

---

## ✨ Features

- ⚡ Real-time plant condition monitoring via Firebase  
- 📊 Automatic data refresh every 5 seconds  
- 🌱 Clean and intuitive user interface  
- 📱 Cross-platform support: Android, iOS, and Web  
- 🔥 Simple Firebase Realtime Database integration

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later  
- npm v9 or later (or yarn)  
- [Expo CLI](https://docs.expo.dev/get-started/installation/)  
- Expo Go app (for mobile device testing)  
- A Firebase project with Realtime Database

### Installation

1. **Clone the repo**

```bash 
git clone https://github.com/your-username/plant-monitor.git
cd plant-monitor
```

2. **Install dependencies**
```bash
npm install 
#or
yarn install
```

3. **Configure Firebase**

- Create a `.env` file in the project root with:

  ```
  FIREBASE_URL=https://your-project.firebaseio.com
  FIREBASE_AUTH=your-database-secret
  ```

- Set up Firebase Realtime Database in your Firebase Console  
- Update your database security rules for development:

  ```
  {
    "rules": {
      ".read": true,
      ".write": false
    }
  }
  ```

---

### Running the App

Start the Expo development server and select your platform:

- **Android**

```bash
npx expo start --android
```
- **iOS**

npx expo start --ios

- **Web**

```bash
npx expo start --web
```
Scan the QR code with the Expo Go app to launch on your mobile device.

---

---

## 🛠️ Built With

- [Expo](https://expo.dev/) – Universal React Native tooling  
- [React Native](https://reactnative.dev/) – Mobile UI framework  
- [Firebase](https://firebase.google.com/) – Real-time NoSQL database  

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs by opening issues  
- Suggest new features or improvements  
- Fork the repo and submit pull requests  

---

## ⚠️ Troubleshooting

- To clear Expo cache, run:

```bash
npx expo start -c
```

- Verify your Firebase credentials in `.env` if connection issues arise  
- Remove and reinstall dependencies by deleting `node_modules` and `package-lock.json` and running install again

---

## 🔒 Security Tips

- Never commit your `.env` file or any secrets to public repos  
- For production, update Firebase security rules to restrict access appropriately  

---


Created with ❤️ for healthy plants everywhere 🌱







