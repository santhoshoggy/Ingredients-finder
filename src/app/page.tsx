import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
      <Gallery />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
