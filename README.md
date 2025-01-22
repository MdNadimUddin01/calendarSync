# CalendarSync

CalendarSync is a web application that allows users to log in using Google Single Sign-On (SSO), view their Google Calendar events in a table format, filter and search events, and delete events directly from the interface.

## ✨ Features

### Core Functionality
- **Google SSO Login:** Secure login using Google OAuth 2.0
- **Display Google Calendar Events:** 
  - Fetch and display events in a responsive table
  - Columns include Event Name, Start Date, End Date, and Location
  - Events sorted by date with most recent first
- **Filter Events by Date:** Custom filtering logic to filter events by specified date range

### Additional Features
- **Search Events:** Search for events by name using a search box
- **Delete Events:** Select one or multiple events using checkboxes for bulk deletion
- **User Dashboard:** Personalized dashboard displaying calendar events after login

## 🛠️ Tech Stack

### Frontend
- **React + Vite**: For fast and efficient development
- **Tailwind CSS**: For modern and responsive UI styling
- **React Icons & Lucide Icons**: For enhanced UI elements
- **Axios**: For handling API requests

### APIs
- **Google OAuth 2.0**: For secure authentication
- **Google Calendar API**: For fetching and deleting events

## 📁 Project Structure
```
project-name/
├── public/
├── src/
│   ├── components/
│   │   ├── EventDetails.jsx
│   │   ├── FrontPage.jsx
│   │   ├── Navbar.jsx
│   │   └── UserMenu.jsx
│   ├── pages/
│   │   ├── Home.js
│   │   └── Table.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── README.md
├── package.json
├── vite.config.js
└── etc.
```

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (v16 or later) installed on your system
- A Google Cloud Console project with OAuth 2.0 credentials
- Google Calendar API enabled

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/MdNadimUddin01/calendarSync.git
    cd calendarSync
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
   Create a `.env` file in the project root:
   ```env
   VITE_GOOGLE_CLIENT_ID=your_client_id_here
   ```

4. Run the application:
    ```bash
    npm run dev
    ```

5. Open the application:
   Visit `http://localhost:5173`

## 🔑 Google Cloud Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API
4. Configure the OAuth consent screen
5. Create OAuth 2.0 credentials
6. Add authorized JavaScript origins and redirect URIs

## 🧮 Custom Logic

### Filter Events by Date
```javascript
const val = eventDetails.filter((item) => {
    return (
        new Date(item.start.dateTime).toLocaleDateString() ===
        new Date(e.target.value).toLocaleDateString()
    );
});
```

### Search Events by Name
```javascript
const val = eventDetails.filter((item) => {
    return item.summary.toLowerCase().includes(e.target.value.toLowerCase());
});
```

## 📜 Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build


## 🙏 Acknowledgments
- Google Cloud Platform for APIs and OAuth services
- React and Vite for development framework
- Tailwind CSS for modern styling
