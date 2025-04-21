'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export default function TypewriterComponent({
  words,
  loop = true,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 1500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timeout: NodeJS.Timeout;
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentWord === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => 
          prevIndex === words.length - 1 && !loop ? prevIndex : (prevIndex + 1) % words.length
        );
      } else {
        timeout = setTimeout(() => {
          setCurrentWord(prev => prev.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      const word = words[currentWordIndex];
      if (currentWord.length === word.length) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentWord(word.slice(0, currentWord.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentWord, currentWordIndex, isDeleting, isWaiting, words, loop, typeSpeed, deleteSpeed, delayBetween]);

  return (
    <span className="inline-block">
      {currentWord}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-blink" />
    </span>
  );
}