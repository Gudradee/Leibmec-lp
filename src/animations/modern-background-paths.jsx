import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

// ─── Geometric Grid ─────────────────────────────────────────────────────────
function GeometricPaths() {
  const paths = useMemo(() => {
    const result = [];
    const gridSize = 40;
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 12; y++) {
        if (Math.random() > 0.7) {
          result.push({
            id: `grid-${x}-${y}`,
            d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
            delay: Math.random() * 3,
            isGold: Math.random() > 0.75,
          });
        }
      }
    }
    return result;
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke={path.isGold ? "#fec539" : "white"}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, path.isGold ? 0.7 : 0.4, 0],
          }}
          transition={{
            duration: 5,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// ─── Organic Flow ────────────────────────────────────────────────────────────
function FlowPaths() {
  const flowPaths = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => {
      const amplitude = 45 + i * 9;
      const offset = i * 55;
      return {
        id: `flow-${i}`,
        d: `M-100,${180 + offset} Q200,${180 + offset - amplitude} 500,${180 + offset} T900,${180 + offset}`,
        strokeWidth: 0.8 + i * 0.25,
        opacity: 0.12 + i * 0.04,
        delay: i * 0.5,
        isGold: i % 5 === 0,
      };
    }), []);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 800 800">
      {flowPaths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke={path.isGold ? "#fec539" : "white"}
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 0.8, 0],
            opacity: [0, path.opacity, path.opacity * 0.7, 0],
          }}
          transition={{
            duration: 9,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

// ─── Neural Network ──────────────────────────────────────────────────────────
function NeuralPaths() {
  const { nodes, connections } = useMemo(() => {
    const ns = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * 800,
      y: Math.random() * 600,
      id: `node-${i}`,
      isGold: Math.random() > 0.8,
    }));

    const conns = [];
    ns.forEach((node, i) => {
      ns.forEach((other, j) => {
        if (i >= j) return;
        const dist = Math.hypot(node.x - other.x, node.y - other.y);
        if (dist < 120 && Math.random() > 0.6) {
          conns.push({
            id: `conn-${i}-${j}`,
            d: `M${node.x},${node.y} L${other.x},${other.y}`,
            delay: Math.random() * 7,
            isGold: node.isGold || other.isGold,
          });
        }
      });
    });

    return { nodes: ns, connections: conns };
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke={conn.isGold ? "#fec539" : "white"}
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 4, delay: conn.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={node.isGold ? 2.5 : 1.8}
          fill={node.isGold ? "#fec539" : "white"}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1.3, 1], opacity: [0, node.isGold ? 0.9 : 0.5, 0.8, node.isGold ? 0.9 : 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

// ─── Spirals ─────────────────────────────────────────────────────────────────
function SpiralPaths() {
  const spirals = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => {
      const centerX = 400 + (i % 4 - 1.5) * 200;
      const centerY = 300 + (Math.floor(i / 4) - 0.5) * 200;
      const radius = 75 + i * 14;
      const turns = 3 + i * 0.5;

      let path = `M${centerX + radius},${centerY}`;
      for (let angle = 0; angle <= turns * 360; angle += 5) {
        const radian = (angle * Math.PI) / 180;
        const r = radius * (1 - angle / (turns * 360));
        path += ` L${centerX + r * Math.cos(radian)},${centerY + r * Math.sin(radian)}`;
      }

      return { id: `spiral-${i}`, d: path, delay: i * 0.9, isGold: i % 3 === 0 };
    }), []);

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
      {spirals.map((spiral) => (
        <motion.path
          key={spiral.id}
          d={spiral.d}
          fill="none"
          stroke={spiral.isGold ? "#fec539" : "white"}
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0], rotate: [0, 360] }}
          transition={{
            pathLength: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 14, repeat: Infinity, ease: "linear" },
            delay: spiral.delay,
          }}
        />
      ))}
    </svg>
  );
}

// ─── Pattern names ────────────────────────────────────────────────────────────
const PATTERNS = ["neural", "flow", "geometric", "spiral"];

const renderPattern = (index) => {
  switch (index) {
    case 0: return <NeuralPaths />;
    case 1: return <FlowPaths />;
    case 2: return <GeometricPaths />;
    case 3: return <SpiralPaths />;
    default: return <NeuralPaths />;
  }
};

// ─── ModernBackgroundPaths ───────────────────────────────────────────────────
// Absolute-positioned background layer that cycles through 4 SVG pattern styles.
// Place inside a `relative overflow-hidden` parent (e.g. the hero section).
//
// Props:
//   intervalMs  — ms between pattern changes (default 6000)
export function ModernBackgroundPaths({ intervalMs = 6000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % PATTERNS.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <>
      {/* Pattern canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {renderPattern(current)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pattern indicator dots — bottom-right of hero */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20 pointer-events-none">
        {PATTERNS.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            animate={{
              width:  i === current ? 20 : 6,
              height: 6,
              backgroundColor: i === current ? "#fec539" : "rgba(255,255,255,0.3)",
              scale: i === current ? 1 : 0.9,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        ))}
      </div>
    </>
  );
}
