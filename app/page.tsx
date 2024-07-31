'use client'; // ใช้ 'use client' เพื่อบอก Next.js ว่านี่คือคอมโพเนนต์ของฝั่งไคลเอนต์

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  // สร้างสถานะเพื่อเก็บ UUID
  const [orderID, setOrderID] = useState('');

  // ฟังก์ชันที่ใช้สร้าง UUID และตั้งค่าในสถานะ
  const generateOrderID = () => {
    const uuid = uuidv4();
    setOrderID(uuid.substring(0, 5)); // ตัดเอา 5 ตัวแรกของ UUID และอัพเดตสถานะ
  };

  // ฟังก์ชันที่เรียกใช้เมื่อคลิกปุ่ม
  const handleClick = () => {
    generateOrderID();
  };

  return (
      <div className="p-4">
        <button
            onClick={handleClick}
            className="btn bg-sky-700 text-white p-2 rounded hover:bg-sky-800 transition duration-300"
        >
          คลิกที่นี่
        </button>
        {/* แสดง UUID ที่สร้างขึ้น */}
        {orderID && (
            <div className="mt-4 text-lg">
              รหัสออเดอร์: <strong>{orderID}</strong>
            </div>
        )}
      </div>
  );
}
