import React, { useState, useEffect } from 'react';
import './animation.css'

const Typing = () => {
  const phrases = ["Web Developer", "YouTuber", "Django Developer", "React Developer", "Python Developer"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      timeout = setTimeout(() => {
        setDisplayedPhrase(phrases[currentPhraseIndex].substring(0, displayedPhrase.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedPhrase(phrases[currentPhraseIndex].substring(0, displayedPhrase.length - 1));
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [displayedPhrase, currentPhraseIndex, isTyping, phrases]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTyping && displayedPhrase === '') {
      setIsTyping(true);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    }
  }, [displayedPhrase, isTyping, currentPhraseIndex, phrases]);

  return (
    <div className="text-white text-2xl" style={{ animation: 'slideUp 1s ease forwards' }}>
      <span>I'm a </span><b>{displayedPhrase}</b>|
    </div>
  );
};

export default Typing;
