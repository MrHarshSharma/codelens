# Firebase Analytics Setup Guide for Prysmgrid

## Step 1: Install Firebase SDK

Run the following command in your project directory:

```bash
npm install firebase
```

## Step 2: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `prysmgrid-analytics`
4. Choose whether to enable Google Analytics (recommended: Yes)
5. Select or create a Google Analytics account
6. Click "Create Project"

## Step 3: Add Web App to Firebase Project

1. In your Firebase project dashboard, click the web icon `</>`
2. Enter app nickname: `prysmgrid-web`
3. Check "Also set up Firebase Hosting" if you want to use Firebase Hosting
4. Click "Register app"

## Step 4: Get Firebase Configuration

After registering your app, you'll see a configuration object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "prysmgrid-analytics.firebaseapp.com",
  projectId: "prysmgrid-analytics",
  storageBucket: "prysmgrid-analytics.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890",
  measurementId: "G-XXXXXXXXXX"
};
```

## Step 5: Update Firebase Configuration

1. Open `src/firebase.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-actual-auth-domain",
  projectId: "your-actual-project-id",
  storageBucket: "your-actual-storage-bucket",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id",
  measurementId: "your-actual-measurement-id"
};
```

## Step 6: Enable Analytics

1. In your Firebase console, go to "Analytics" in the left sidebar
2. If not already enabled, click "Enable Analytics"
3. Your Analytics will automatically start collecting data

## Step 7: Activate the Code

After installing Firebase and updating the config, uncomment the following lines:

### In `src/App.js`:
```javascript
// Uncomment these lines:
import { analytics } from './firebase';
console.log('Firebase Analytics initialized:', analytics);
```

### In `src/utils/analytics.js`:
```javascript
// Uncomment these lines:
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

// And uncomment all the logEvent calls in each function
```

## Step 8: Test Analytics

1. Run your app: `npm start`
2. Navigate through your site and interact with elements
3. Check the Firebase Analytics console (data may take 24-48 hours to appear)
4. Use Firebase Analytics DebugView for real-time testing

## Step 9: Environment Variables (Optional but Recommended)

For security, consider using environment variables:

1. Create a `.env` file in your project root:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

2. Update `src/firebase.js` to use environment variables:
```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
```

## Analytics Events Being Tracked

The following events are automatically tracked:

- **Page Views**: Automatic tracking when users visit pages
- **Contact Form Submissions**: When users submit the contact form
- **Phone Clicks**: When users click on phone numbers
- **Email Clicks**: When users click on email addresses
- **Service Interest**: When users interact with service sections
- **Button Clicks**: Custom button interactions

## Viewing Analytics Data

1. Go to Firebase Console → Analytics
2. Use the following sections:
   - **Dashboard**: Overview of user activity
   - **Events**: Detailed event tracking
   - **Conversions**: Mark important events as conversions
   - **Audiences**: Create user segments
   - **Funnels**: Track user journey through your site

## Debug Mode

To enable debug mode for testing:

1. Install the Google Analytics Debugger Chrome extension
2. Or add `?debug_mode=true` to your URL
3. Check the Firebase Analytics DebugView in your console

## Need Help?

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [Firebase Analytics Events](https://firebase.google.com/docs/analytics/events)
- [Firebase Console](https://console.firebase.google.com/) 