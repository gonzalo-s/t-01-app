# t-01-app

My first Expo app created following the [Expo tutorial guide](https://docs.expo.dev/tutorial/create-your-first-app/).

## Features

- Built with React Native and Expo
- TypeScript support
- React Navigation for screen navigation
- Custom components and styling
- Cross-platform compatibility (iOS, Android, Web)

## Getting Started

### 0. Configure environment variables

Create a `.env` file in the project root (`c:\Users\gonzalo.soler\Documents\workspace\t-01-app\.env`) with the following content:

```
WS_HOST="192.168.68.26"
WS_PORT="8080"
```

---

## Adjust the IP and port as needed for your environment.

---

### 1. Install dependencies (run in project root)

```bash
cd c:\Users\gonzalo.soler\Documents\workspace\t-01-app
npm install
```

### 2. Start the Expo development server (run in project root)

```bash
npm start
```

### 3. Start the backend WebSocket server (run in the `server` folder)

```bash
cd c:\Users\gonzalo.soler\Documents\workspace\t-01-app\server
npm install
node index.js
```

### 4. Scan the test QR code

The test QR code image is located at:

```
c:\Users\gonzalo.soler\Documents\workspace\t-01-app\tstID.jpeg
```

Use the Expo Go app on your mobile device to scan this QR code for testing.

### 5. Open the app

- Use the Expo Go app to scan the QR code shown in your terminal/browser, or
- Press `w` in the terminal to open the app in your web browser.

## Project Structure

- `App.tsx` - Main app component with navigation setup
- `screens/` - Screen components (Home, About, ScanQRScreen, ViewScreen, EnterUserTurnScreen)
- `components/` - Reusable UI components
- `server/` - Backend WebSocket server
- `tstID.jpeg` - Test QR code image for scanning
- `app.json` - Expo configuration

## Built With

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
