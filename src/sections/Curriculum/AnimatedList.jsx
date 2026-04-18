import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './AnimatedList.css';

const AnimatedItem = ({ children, delay = 0, index, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onClick={onClick}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedList = ({
  items = [],
  className = '',
  displayScrollbar = false
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleItemClick = useCallback((index) => {
    // Allows toggling the same item open/closed
    setSelectedIndex(prev => prev === index ? -1 : index);
  }, []);

  const handleScroll = useCallback(e => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  useEffect(() => {
    // Initial check for bottom gradient purely visually
    if (listRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = listRef.current;
      const bottomDistance = scrollHeight - (scrollTop + clientHeight);
      setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    }
  }, [items]);

  return (
    <div className={`scroll-list-container ${className}`}>
      <div ref={listRef} className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''}`} onScroll={handleScroll}>
        {items.map((item, index) => {
          const isSelected = selectedIndex === index;
          
          // Strip "Session" leaving strictly the number
          const sessionNumber = item.num ? item.num.replace(/[^0-9]/g, '').replace(/^0+/, '') : (index + 1);
          
          return (
            <AnimatedItem
              key={index}
              delay={index}
              index={index}
              onClick={() => handleItemClick(index)}
            >
              <div className={`item ${isSelected ? 'selected' : ''}`}>
                <div className="item-header">
                  <span className="item-num">{sessionNumber}</span>
                  <p className="item-text">{item.title}</p>
                  <span className={`expand-icon ${isSelected ? 'open' : ''}`}>+</span>
                </div>
                
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="item-details">
                        <ul className="item-modules-img-style">
                          {item.modules.map((m, idx) => (
                            <li key={idx}>
                              <span>+</span> {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedItem>
          );
        })}
      </div>
      <div className="top-gradient" style={{ opacity: topGradientOpacity }}></div>
      <div className="bottom-gradient" style={{ opacity: bottomGradientOpacity }}></div>
    </div>
  );
};

export default AnimatedList;
