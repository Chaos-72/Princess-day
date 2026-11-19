import type { CSSProperties } from 'react';

interface PetalItem {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  type: 'heart' | 'petal';
  color: string;
}

const AMBIENT_ITEMS: PetalItem[] = [
  { id: 1, left: '8%', size: 12, duration: '21s', delay: '0s', type: 'petal', color: '#E8C5D0' },
  { id: 2, left: '19%', size: 10, duration: '25s', delay: '4s', type: 'heart', color: '#DFB6C4' },
  { id: 3, left: '34%', size: 13, duration: '19s', delay: '8s', type: 'petal', color: '#D7CBEB' },
  { id: 4, left: '52%', size: 11, duration: '24s', delay: '2s', type: 'petal', color: '#E8C5D0' },
  { id: 5, left: '68%', size: 10, duration: '22s', delay: '6s', type: 'heart', color: '#D9A78A' },
  { id: 6, left: '82%', size: 13, duration: '20s', delay: '10s', type: 'petal', color: '#D7CBEB' },
  { id: 7, left: '92%', size: 11, duration: '26s', delay: '3s', type: 'heart', color: '#E8C5D0' },
];

export function FloatingAmbient() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {AMBIENT_ITEMS.map((item) => {
        const style = {
          left: item.left,
          bottom: '-28px',
          '--float-duration': item.duration,
          '--float-delay': item.delay,
        } as CSSProperties;

        return (
          <div
            key={item.id}
            style={style}
            className="animate-float-petal absolute opacity-0"
          >
            {item.type === 'heart' ? (
              <svg
                width={item.size}
                height={item.size}
                viewBox="0 0 24 24"
                fill={item.color}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                width={item.size + 2}
                height={item.size + 2}
                viewBox="0 0 24 24"
                fill={item.color}
              >
                <path d="M12 3C7.5 7 5 11.5 6.5 16.5C8 20.5 16 20.5 17.5 16.5C19 11.5 16.5 7 12 3Z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
