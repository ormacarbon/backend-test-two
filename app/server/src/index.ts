import 'dotenv/config';
import app from "./app";

const PORT = process.env.PORT || 3005;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));