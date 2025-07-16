# GameHub

GameHub is a modern video game discovery web application built using React, TypeScript, and Chakra UI. It allows users to browse and filter games by platform, genre, and sort order. The application uses the RAWG Video Games Database API to fetch and display real-time game data.

## Features

- Search games by name
- Filter by genre and platform
- Sort results by popularity, release date, rating, and more
- Responsive design with dark/light mode support


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gamehub.git
   ```

2. Navigate into the project directory:

   ```bash
   cd gamehub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Obtain an API key from [RAWG API](https://rawg.io/apidocs).

5. Add your API key to `src/services/api-client.ts`:

   ```ts
   const axiosInstance = axios.create({
     baseURL: "https://api.rawg.io/api",
     params: {
       key: "YOUR_API_KEY_HERE",
     },
   });
   ```

6. Run the development server:

   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173`.

## Technologies Used

- React
- TypeScript
- Chakra UI
- Vite
- RAWG.io API

## Folder Structure

```
src/
├── components/
├── hooks/
├── pages/
├── services/
├── assets/
├── App.tsx
└── main.tsx
```

## Author & Contact

**Arshiya Taj**  
📧 arshiyataj1412@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/arshiya-taj)
