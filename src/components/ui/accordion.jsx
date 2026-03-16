import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/**
 * Accordion adapted for the LEIbmec project.
 * Accepts an `items` prop: Array<{ id, icon?, title, content }>
 */
export function Accordion({ items = [] }) {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {items.map(({ id, icon: Icon, title, content }, index) => {
        const isOpen = openItem === id;

        return (
          <div
            key={id}
            style={{
              borderBottom:
                index < items.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none",
            }}
          >
            <button
              onClick={() => toggleItem(id)}
              aria-expanded={isOpen}
              className="flex items-center justify-between w-full text-left focus:outline-none select-none"
              style={{
                padding: "20px 24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div className="flex items-center gap-3">
                {Icon && (
                  <Icon
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                    style={{ color: "#fec539", flexShrink: 0 }}
                  />
                )}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </span>
              </div>

              <div className="relative w-4 h-4 flex-shrink-0 ml-4">
                <Plus
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "#fec539",
                    transition: "opacity 0.25s",
                    opacity: isOpen ? 0 : 1,
                  }}
                />
                <Minus
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "#fec539",
                    transition: "opacity 0.25s",
                    opacity: isOpen ? 1 : 0,
                  }}
                />
              </div>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(221,223,231,0.65)",
                  lineHeight: 1.7,
                  margin: 0,
                  padding: "0 24px 20px",
                }}
              >
                {content}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
