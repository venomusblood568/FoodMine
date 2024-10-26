# FoodMine - Food Ordering Application

FoodMine is a full-stack web application that allows users to browse, order, and manage food items. The application features user authentication, shopping cart functionality, order tracking, and an admin dashboard for managing foods and users.

## Features

### Customer Features
- User registration and authentication
- Browse food items with search and tag filtering
- Shopping cart functionality
- Secure checkout process
- Order tracking
- Profile management
- Order history
- Payment processing

### Admin Features
- Dashboard for analytics
- Food item management (CRUD operations)
- User management
- Order management
- Search functionality for foods and users

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- CSS for styling
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication
- Cors for cross-origin resource sharing

## Setup Instructions

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Environment Setup

Create two separate `.env` files:

In the backend root directory, create `.env`:
```bash
# /backend/.env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

In the frontend root directory, create `.env`:
```bash
# /frontend/.env
REACT_APP_BASE_URL=http://localhost:5000
```

4. Running the Application

### For Backend Development
```bash
# In the backend directory:
npm start          # This command starts the backend server
npm run dev        # This starts the server with auto-reload when you make changes (using nodemon)
```

### For Frontend Development
```bash
# In the frontend directory:
npm start          # This starts the React development server - use this while developing
npm run build      # This creates a production version of your frontend - use when deploying
```

## API Routes

### Food Routes
- `GET /api/foods` - Get all foods
- `GET /api/foods/:id` - Get food by ID
- `POST /api/foods` - Add new food (Admin)
- `PUT /api/foods/:id` - Update food (Admin)
- `DELETE /api/foods/:id` - Delete food (Admin)

### User Routes
- `POST /api/users/login` - User login
- `POST /api/users/register` - User registration
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Order Routes
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order payment status
- `GET /api/orders/track/:id` - Track order status

## Authentication

The application uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token in the Authorization header:
```
Authorization: Bearer [token]
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add some NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details
