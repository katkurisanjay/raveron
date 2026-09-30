'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/config/faq';

interface FaqAccordionProps {
  items: FaqItem[];
  light?: boolean;
}

export function FaqAccordion({ items, light = false }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (items.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const btnId = `faq-btn-${item.id}`;

        return (
          <div
            key={item.id}
            style={{
              borderRadius: 'var(--radius-lg)',
              border: `1px solid ${isOpen
                ? light ? 'rgba(37,99,235,0.3)' : 'rgba(37,99,235,0.2)'
                : light ? 'rgba(255,255,255,0.08)' : 'var(--color-border-light)'}`,
              background: isOpen
                ? light ? 'rgba(37,99,235,0.08)' : 'rgba(37,99,235,0.03)'
                : light ? 'rgba(255,255,255,0.03)' : 'transparent',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }}
          >
            {/* Trigger button */}
            <button
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1.125rem 1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-primary)',
              }}
            >
              <span style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: light ? 'var(--color-white)' : 'var(--color-navy-primary)',
                lineHeight: 1.4,
              }}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  flexShrink: 0,
                  color: isOpen ? 'var(--color-blue-electric)' : light ? 'rgba(255,255,255,0.4)' : 'var(--color-cool-gray)',
                  display: 'flex',
                }}
                aria-hidden="true"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            {/* Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    padding: '0 1.25rem 1.25rem',
                    fontSize: '0.9rem',
                    color: light ? 'rgba(255,255,255,0.6)' : 'var(--color-cool-gray)',
                    lineHeight: 1.7,
                  }}>
                    {item.answer}
                    {!item.confirmed && (
                      <span
                        className="mono"
                        style={{
                          display: 'inline-block',
                          marginLeft: '0.5rem',
                          fontSize: '0.6875rem',
                          color: 'rgba(255,165,0,0.7)',
                          verticalAlign: 'middle',
                        }}
                      >
                        [ASSUMED]
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
