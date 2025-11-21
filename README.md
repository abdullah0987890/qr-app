# QR Scanner Android App

A Next.js-based QR code scanner application converted to Android using Capacitor.

## ✨ Features

- 🔐 Secure login system
- 📷 Real-time QR code scanning
- ✅ Automatic duplicate detection
- 💾 Persistent scan history
- 📱 Native Android app

## 🚀 Quick Start

### For Development (Web)

```bash
npm install
npm run dev
```

Open http://localhost:3000

**Login Credentials:**
- Username: `Scaning@admin.com`
- Password: `ScanAdmin123@!#`

### For Android APK

> [!IMPORTANT]
> **Java 11+ Required**: You need JDK 11 or higher to build Android APKs.
> Your system currently has Java 1.1.7. Download JDK 17 from: https://adoptium.net/

**After installing JDK 11+:**

```bash
# Build and sync to Android
npm run android:build

# Build debug APK
cd android
.\gradlew assembleDebug
```

📖 **Full Android build instructions**: See [ANDROID_BUILD_GUIDE.md](./ANDROID_BUILD_GUIDE.md)

## 📁 Project Structure

```
qr app/
├── src/
│   └── app/
│       ├── page.tsx          # Main app component
│       ├── globals.css       # Styles
│       └── layout.tsx        # Root layout
├── android/                  # Android native project
│   └── app/
│       └── src/main/
│           └── AndroidManifest.xml  # Camera permissions configured
├── capacitor.config.ts       # Capacitor configuration
├── next.config.ts            # Next.js config (static export)
├── package.json
└── ANDROID_BUILD_GUIDE.md    # Detailed Android build instructions
```

## 🔑 How It Works

1. **Login**: Enter credentials to access the scanner
2. **Scan**: Click "Scan QR Code" to activate camera
3. **Validation**: 
   - First scan of a QR code → **VALID** ✅
   - Subsequent scans of same code → **INVALID** ❌
4. **History**: Scanned codes stored in localStorage

## 🛠️ Technologies

- **Frontend**: Next.js 16, React 19, TypeScript
- **QR Scanning**: html5-qrcode
- **Mobile**: Capacitor 6
- **Platform**: Android

## 📱 APK Files Location

After building:

- **Debug APK**: `android/app/build/outputs/apk/debug/app-debug.apk`
- **Release APK**: `android/app/build/outputs/apk/release/app-release.apk`
- **Release AAB** (for Play Store): `android/app/build/outputs/bundle/release/app-release.aab`

## 🔐 Permissions

The Android app requires:
- ✅ Camera access (for QR scanning)
- ✅ Internet access (for web assets)

## 📤 Google Play Store Submission

See the [ANDROID_BUILD_GUIDE.md](./ANDROID_BUILD_GUIDE.md) for complete instructions on:
- Signing your APK
- Creating a Play Store listing
- Uploading your app
- App review process

## 🐛 Troubleshooting

### Camera not working
- Grant camera permissions when prompted
- Check Android settings → Apps → QR Scanner → Permissions

### Build fails
- Ensure JDK 11+ is installed: `java -version`
- Clean build: `cd android && .\gradlew clean`
- Rebuild: `.\gradlew assembleDebug`

### App crashes on startup
- Check that web assets are synced: `npx cap sync android`
- Rebuild the Next.js app: `npm run build`

## 📞 Support

For detailed build instructions and troubleshooting, see [ANDROID_BUILD_GUIDE.md](./ANDROID_BUILD_GUIDE.md)

## 📄 License

Private project - All rights reserved
