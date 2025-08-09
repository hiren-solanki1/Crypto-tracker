# 🚀 Crypto Hunter - Cryptocurrency Tracker

A modern React application for tracking cryptocurrency prices, viewing detailed charts, and managing your favorite coins. Built with React, Material-UI, and Firebase authentication.

![Crypto Hunter](./public/banner.jpg)

## ✨ Features

- 📈 **Real-time Cryptocurrency Prices** - Track live prices of 100+ cryptocurrencies
- 📊 **Interactive Charts** - Detailed price charts with multiple timeframes
- 🔍 **Search & Filter** - Easily find and filter cryptocurrencies
- ⭐ **Favorites/Watchlist** - Save your favorite coins for quick access
- 🔐 **User Authentication** - Secure login with Firebase Authentication
- 🌙 **Dark Theme** - Beautiful dark UI optimized for extended viewing
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 17
- **Build Tool**: Vite (migrated from Create React App)
- **UI Library**: Material-UI v4
- **Authentication**: Firebase Authentication
- **Charts**: Chart.js with react-chartjs-2
- **Routing**: React Router v5
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Code Quality**: ESLint + Prettier
- **Carousel**: React Alice Carousel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account for authentication features

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Unknowncoder135/crypto-traker.git
   cd crypto-traker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Copy the environment template
   cp .env.example .env

   # Edit .env with your Firebase configuration (optional for basic features)
   # The app will work without Firebase auth, but you won't have user authentication
   ```

4. **Set up Firebase** (Optional - for authentication features)
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Google provider
   - Copy your Firebase config values to the `.env` file:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     # ... other Firebase config values
     ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

In the project directory, you can run:

### Development

- `npm run dev` - Runs the app in development mode with Vite
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

### Code Quality

- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix linting errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

## 🏗️ Project Structure

```
crypto-tracker/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── logo192.png
│   └── manifest.json
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Authentication/ # Login, Signup, User management
│   │   ├── Banner/         # Homepage banner and carousel
│   │   ├── Alert.jsx       # Notification component
│   │   ├── CoinInfo.jsx    # Coin details and charts
│   │   ├── CoinsTable.jsx  # Cryptocurrency table
│   │   ├── Header.jsx      # Navigation header
│   │   └── SelectButton.jsx# Custom button component
│   ├── config/             # Configuration files
│   │   ├── api.js          # API endpoints
│   │   ├── data.js         # Static data
│   │   └── firebaseConfig.js # Firebase configuration
│   ├── Pages/              # Page components
│   │   ├── CoinPage.jsx    # Individual coin details
│   │   └── HomePage.jsx    # Main landing page
│   ├── App.jsx             # Main App component
│   ├── CryptoContext.jsx   # Global state management
│   ├── firebase.js         # Firebase setup
│   └── index.jsx           # Application entry point
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🔥 Key Features Explained

### 1. Real-time Price Tracking

- Fetches live data from CoinGecko API
- Updates prices in real-time
- Supports 100+ cryptocurrencies

### 2. Interactive Charts

- Powered by Chart.js
- Multiple timeframe options (24h, 7d, 30d, 1y)
- Responsive and touch-friendly

### 3. User Authentication

- Firebase Authentication integration
- Google Sign-in support
- Secure user session management
- Personalized watchlists

### 4. Modern Development Experience

- **Vite**: Lightning-fast HMR and builds
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent code formatting
- **Modern React**: Hooks and Context API

## 🌐 API Integration

This project uses the [CoinGecko API](https://www.coingecko.com/en/api) for cryptocurrency data:

- `/coins/markets` - Get market data for cryptocurrencies
- `/coins/{id}` - Get detailed information about a specific coin
- `/coins/{id}/market_chart` - Get historical market data for charts

## 🎨 UI/UX Features

- **Material Design**: Clean and modern interface
- **Dark Theme**: Easy on the eyes for extended use
- **Responsive Layout**: Works on all screen sizes
- **Loading States**: Smooth loading indicators
- **Error Handling**: Graceful error messages
- **Accessibility**: ARIA labels and keyboard navigation

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
# Add other Firebase config variables
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication > Sign-in method > Google
4. Copy configuration to `src/config/firebaseConfig.js`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CoinGecko API](https://www.coingecko.com/) for cryptocurrency data
- [Material-UI](https://material-ui.com/) for the beautiful components
- [Chart.js](https://www.chartjs.org/) for the charting library
- [Firebase](https://firebase.google.com/) for authentication services
- [Vite](https://vitejs.dev/) for the amazing build tool

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ by [Hiren](https://github.com/hiren-solanki1)**
