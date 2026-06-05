import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const [floatY, setFloatY] = useState(0);

  useEffect(() => {
    let frame;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;
      setFloatY(Math.sin(t * 1.2) * 8);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 22 },
    },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f4ff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background decorative scattered mini cards */}
      {[
        { x: '8%',  y: '12%', rot: -18, s: 0.7, op: 0.12, delay: 0 },
        { x: '88%', y: '8%',  rot:  14, s: 0.6, op: 0.10, delay: 0.3 },
        { x: '4%',  y: '72%', rot: -10, s: 0.5, op: 0.08, delay: 0.6 },
        { x: '92%', y: '68%', rot:  20, s: 0.65, op: 0.10, delay: 0.2 },
        { x: '75%', y: '85%', rot: -14, s: 0.55, op: 0.09, delay: 0.5 },
        { x: '18%', y: '88%', rot:  10, s: 0.6, op: 0.08, delay: 0.4 },
      ].map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: c.op, scale: c.s, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: c.delay, duration: 0.6 },
            scale:   { delay: c.delay, duration: 0.6 },
            y: { delay: c.delay, duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            left: c.x,
            top: c.y,
            width: 72,
            height: 46,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #185FA5, #534AB7)',
            transform: `rotate(${c.rot}deg)`,
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 520,
          zIndex: 1,
        }}
      >
        {/* Animated stacked card illustration */}
        <motion.div
          variants={itemVariants}
          style={{
            position: 'relative',
            width: 140,
            height: 100,
            marginBottom: '2rem',
            transform: `translateY(${floatY}px)`,
          }}
        >
          {/* card back */}
          <div style={{
            position: 'absolute', width: 100, height: 64, borderRadius: 10,
            background: '#534AB7', opacity: 0.3,
            top: 12, left: 8,
            transform: 'rotate(-10deg) translate(-10px, -8px)',
          }} />
          {/* card mid */}
          <div style={{
            position: 'absolute', width: 100, height: 64, borderRadius: 10,
            background: '#378ADD', opacity: 0.55,
            top: 12, left: 8,
            transform: 'rotate(-5deg) translate(-5px, -4px)',
          }} />
          {/* card front */}
          <div style={{
            position: 'absolute', width: 100, height: 64, borderRadius: 10,
            background: 'linear-gradient(135deg, #185FA5 0%, #534AB7 100%)',
            top: 12, left: 8,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', paddingLeft: 14, gap: 6,
          }}>
            {/* question mark */}
            <div style={{
              position: 'absolute', right: 14, top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 28, fontWeight: 800, color: 'rgba(255,255,255,0.25)',
              lineHeight: 1,
            }}>?</div>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: 'white' }} />
            <div style={{ width: 28, height: 3, borderRadius: 1.5, background: 'rgba(255,255,255,0.45)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 1.5, background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </motion.div>

        {/* 404 number */}
        <motion.div variants={itemVariants} style={{ marginBottom: '0.75rem' }}>
          <span style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: '-4px',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #185FA5 0%, #534AB7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            404
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#0C447C',
            margin: '0 0 0.75rem',
            letterSpacing: '-0.5px',
          }}
        >
          This card got lost
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 16,
            color: '#888780',
            margin: '0 0 2.5rem',
            lineHeight: 1.6,
            maxWidth: 380,
          }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to crafting great cards.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.04, backgroundColor: '#4338ca' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '12px 28px',
                background: '#4f46e5',
                color: 'white',
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                transition: 'background 0.2s',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              ← Back to home
            </motion.div>
          </Link>

          <Link to="/templates">
            <motion.div
              whileHover={{ scale: 1.04, background: '#eef2ff' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '12px 28px',
                background: 'white',
                color: '#4f46e5',
                border: '1.5px solid #c7d2fe',
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                transition: 'background 0.2s',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Browse templates
            </motion.div>
          </Link>
        </motion.div>

        {/* Bottom brand tag */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            opacity: 0.45,
          }}
        >
          <div style={{
            width: 18, height: 12, borderRadius: 3,
            background: 'linear-gradient(135deg, #185FA5, #534AB7)',
          }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#534AB7', letterSpacing: '-0.3px' }}>
            Card<span style={{ fontWeight: 300 }}>Craft</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;