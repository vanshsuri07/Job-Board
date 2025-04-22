# Job Board Frontend

This is the frontend client for the Job Board application, a platform that connects job seekers with employers.

## Features

- User authentication (login/signup)
- Job listing and search functionality
- Job application submission
- User profile management
- Responsive design for mobile and desktop

## Tech Stack

- React.js
- Redux for state management
- CSS/SCSS for styling
- Axios for API communication

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository

```bash
git clone https://github.com/vanshsuri07/job-board.git
cd job-board/client
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the client directory with the following contents:

```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs the test suite
- `npm run dev` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## Project Structure

```
client/
├── public/
│   ├── assets/
│   └── index.html
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── redux/            # Redux store, actions, reducers
│   ├── styles/           # CSS/SCSS styles
│   ├── App.js            # Main App component
│   └── index.js          # Entry point
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/)
- [Create React App](https://create-react-app.dev/)
