import { motion, AnimatePresence } from 'motion/react';

interface CelebrationBurstProps {
  burstKey: number;
}

const BURST_PARTICLES = Array.from({ length: 24 }, (_, idx) => {
  const left = 5 + ((idx * 37) % 90);
  const delay = (idx % 6) * 0.08;
  const duration = 2.4 + (idx % 5) * 0.35;
  const driftX = ((idx % 2 === 0 ? 1 : -1) * (18 + (idx % 4) * 14));
  const rotate = (idx % 2 === 0 ? 1 : -1) * (90 + idx * 15);
  const colors = ['#E8B4C6', '#D7C6EB', '#D9A78A', '#7F3952', '#F3D2DC'];
  const color = colors[idx % colors.length];
  const isHeart = idx % 3 === 0;
  const size = 12 + (idx % 4) * 3;

  return { id: idx, left, delay, duration, driftX, rotate, color, isHeart, size };
});

export function CelebrationBurst({ burstKey }: CelebrationBurstProps) {
  if (burstKey === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      <AnimatePresence>
        <div key={burstKey} className="relative h-full w-full">
          {BURST_PARTICLES.map((p) => (
            <motion.div
              key={`${burstKey}-${p.id}`}
              initial={{
                y: -30,
                x: 0,
                opacity: 0.95,
                scale: 0.7,
                rotate: 0,
              }}
              animate={{
                y: '105vh',
                x: p.driftX,
                opacity: [0.95, 0.9, 0],
                scale: 1,
                rotate: p.rotate,
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ left: `${p.left}%`, position: 'absolute', top: 0 }}
            >
              {p.isHeart ? (
                <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
                  <path d="M12 3C7.5 7 5 11.5 6.5 16.5C8 20.5 16 20.5 17.5 16.5C19 11.5 16.5 7 12 3Z" />
                </svg>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
