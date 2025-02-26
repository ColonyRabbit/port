FROM node:20-alpine

WORKDIR /app

# ให้แน่ใจว่า package.json และ package-lock.json ถูกคัดลอกมาก่อน
COPY package.json package-lock.json ./

# ตั้งค่าความปลอดภัยให้ไฟล์ทั้งหมดสามารถอ่าน-เขียนได้
RUN chmod -R 777 /app

# ติดตั้ง dependencies --force เพราะบางครั้งเวอร์ชันของ dependency อาจจะไม่ตรงกัน
RUN npm install --legacy-peer-deps

# คัดลอกโค้ดทั้งหมด
COPY . .

RUN NEXT_DISABLE_ESLINT=1 npm run build
EXPOSE 3000

CMD ["pnpm", "run", "start"]
