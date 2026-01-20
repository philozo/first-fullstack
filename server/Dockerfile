# 1. ใช้ Image Node.js เป็นฐาน
FROM node:18-slim

# 2. สร้างโฟลเดอร์สำหรับเก็บโค้ดในตัว Container
WORKDIR /app

# ติดตั้ง openssl (เผื่อ native)
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# 3. ก๊อปปี้ไฟล์ package.json เพื่อลง Library
COPY package*.json ./
# ติดตั้ง dependencies ทั้งหมดรวมถึง prisma
RUN npm install

# 4. ก๊อปปี้โค้ดทั้งหมดตามไป
COPY . .

# 5. สั่ง Generate Prisma Client (สำคัญสำหรับ Phase 2)
RUN npx prisma generate

# 6. บอกว่า App เรารันที่ Port 5000
EXPOSE 5000

# 7. คำสั่งรัน App
CMD ["node", "index.js"]