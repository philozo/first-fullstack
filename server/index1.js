const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // อนุญาตให้ Frontend ดึงข้อมูลได้
app.use(express.json()); // อ่านข้อมูลแบบ JSON ได้

// สร้างข้อมูลจำลอง (แทน Database ไปก่อน)
const quotes = [
    { id: 1, text: "Eat. Sleep. Code. Repeat.", author: "Dev Life" },
    { id: 2, text: "It’s not a bug, it’s a feature.", author: "Programmer" },
    { id: 3, text: "Hello World, Hello Future.", author: "Coder" }
];

// สร้าง API Route
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]); // ส่งคำคมสุ่มกลับไปเป็น JSON
});

app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
});
