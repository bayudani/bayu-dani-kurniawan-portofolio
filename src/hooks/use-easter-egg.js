import { useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

export const useEasterEgg = () => {
    const [input, setInput] = useState([]);

    // Jurus Rahasia: Up, Up, Down, Down, Left, Right, Left, Right, B, A
    const konamiCode = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
        "b", "a"
    ];

    // Fungsi Meledakkan Kembang Api
    const triggerConfetti = useCallback(() => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        // Suara 'Yay!' (Opsional, kalau mau hening hapus aja)
        const audio = new Audio('https://www.soundjay.com/human/sounds/applause-01.mp3');
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed", e));

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Tembak dari kiri dan kanan
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    }, []);

    // Listener Keyboard (Untuk Desktop)
    useEffect(() => {
        const handleKeyDown = (e) => {
            setInput((prev) => {
                const newInput = [...prev, e.key];
                if (newInput.length > konamiCode.length) {
                    newInput.shift();
                }
                return newInput;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Cek apakah kode cocok
    useEffect(() => {
        if (JSON.stringify(input) === JSON.stringify(konamiCode)) {
            triggerConfetti();
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setInput([]); // Reset setelah sukses
            alert("🎉 KONAMI CODE ACTIVATED! YOU ARE A LEGEND! 🎉");
        }
    }, [input, triggerConfetti]);

    return { triggerConfetti };
};