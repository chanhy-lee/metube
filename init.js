'use strict';

import './db';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
import './models/Comment';
import './models/Video';

const PORT = process.env.PORT;

const handleListening = () => console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);