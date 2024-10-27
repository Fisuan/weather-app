export default function Congratulations() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Поздравляем!</h1>
      <p className="text-xl">Вы нашли все слова!</p>
      <a href="/" className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Играть снова
      </a>
    </div>
  );
}
