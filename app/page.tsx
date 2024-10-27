'use client'

import { useState } from "react";

const sizeComparisons = [
  { size: 0.01, object: "муравей" },
  { size: 0.1, object: "смартфон" },
  { size: 0.3, object: "кошка" },
  { size: 0.5, object: "корова" },
  { size: 1.6, object: "взрослый человек" },
  { size: 2.5, object: "дерево" },
  { size: 5, object: "легковой автомобиль" },
  { size: 10, object: "автобус" },
  { size: 30, object: "синий кит" },
  { size: 50, object: "самолет" },
  { size: 100, object: "футбольное поле" },
  { size: 300, object: "Эйфелева башня" },
  { size: 500, object: "Гора" },
  { size: 1000, object: "Гранд-Каньон" },
];

export default function Home() {
  const [length, setLength] = useState("");
  const [comparison, setComparison] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputLength = parseFloat(length);
    if (isNaN(inputLength)) {
      setComparison("Пожалуйста, введите корректное число.");
      return;
    }

    const closestObject = sizeComparisons.reduce((prev, curr) => 
      Math.abs(curr.size - inputLength) < Math.abs(prev.size - inputLength) ? curr : prev
    );

    setComparison(`Объект примерно такого же размера: ${closestObject.object}`);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 p-4">
        <svg viewBox="0 0 50 200" className="w-full h-full">
          <rect x="0" y="0" width="50" height="200" fill="#f0f0f0" />
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <line x1="0" y1={i * 10} x2="50" y2={i * 10} stroke="black" strokeWidth="0.5" />
              <text x="5" y={i * 10 + 3} fontSize="3">{i * 10}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold mb-4">Сравнение размеров</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Введите длину в метрах"
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            step="0.01"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Сравнить
          </button>
        </form>
        {comparison && (
          <p className="mt-4 text-center">{comparison}</p>
        )}
      </div>
      <div className="w-1/4 p-4">
        <svg viewBox="0 0 100 400" className="w-full h-full">
          <rect x="20" y="0" width="60" height="300" fill="#FFD700" />
          <polygon points="20,300 50,400 80,300" fill="#FFA500" />
          <rect x="20" y="0" width="60" height="30" fill="#A0522D" />
          <rect x="30" y="10" width="40" height="10" fill="#000000" />
        </svg>
      </div>
    </div>
  );
}