const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client'); // ดึง Prisma มาใช้

const app = express();
const prisma = new PrismaClient(); // สร้างตัวแทนฐานข้อมูล
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API สำหรับดึงคำคมทั้งหมดจาก Database
app.get('/api/quote', async (req, res) => {
    const allQuotes = await prisma.quote.findMany(); // ดึงข้อมูลจาก DB
    if (allQuotes.length === 0) {
        return res.json({ text: "No data in Database", author: "System" });
    }
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    res.json(allQuotes[randomIndex]);
});

// แถม: API สำหรับเพิ่มคำคมใหม่ลง Database
app.post('/api/quote', async (req, res) => {
    const { text, author } = req.body;
    const newQuote = await prisma.quote.create({
        data: { text, author }
    });
    res.json(newQuote);
});

app.listen(PORT, () => {
    console.log(`Backend with DB is running at http://localhost:${PORT}`);
});
