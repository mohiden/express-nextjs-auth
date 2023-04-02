# Todo web app

This project is a web application built with Next.js and Node.js/Express, implementing full user authentication features such as sign up, login, and password reset.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: sign up, login, and password reset
- Frontend built with Next.js, a popular React framework
- Backend built with Node.js/Express, a fast and minimalistic web framework
- Passwords are hashed using bcrypt, a popular password-hashing library
- Sessions are managed with the express-session middleware and stored in memory by default
- Frontend and backend are configured to work together seamlessly

## Technologies

This project uses the following technologies:

- Next.js
- Node.js
- Express
- bcrypt
- express-session

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohiden/yourproject.git
   ```

2. Install the dependencies:

```bash
cd api/
yarn
```

3. Set up environment variables by creating a .env file in the root directory of the project, and adding the following variables:

```bash
ACCESS_TOKEN_SECRET=
DB_URI=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_SERVICE_SID=
```

4. Run the development server:

```bash
yarn run watch
yarn run dev
```

## Usage

Once the clinet server is running, you can access the application by navigating to http://localhost:3000 in your web browser.

The application provides a simple user authentication system, allowing users to sign up, login, and reset their password if necessary.

## Contributing

If you'd like to contribute to this project, please fork the repository and make your changes in a separate branch.

## License

This project is licensed under the MIT License.
