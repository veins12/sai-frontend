import ScrollSection from '../components/ScrollSection';

export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* Vertical Section: 1–20 */}
      <ScrollSection from={1} to={20} direction="vertical" />

      {/* Horizontal Section: 21–30 */}
      <ScrollSection from={21} to={30} direction="horizontal" />

      {/* Vertical Section: 31–50 */}
      <ScrollSection from={31} to={50} direction="vertical" />
    </main>
  );
}
