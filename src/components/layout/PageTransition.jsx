import React from 'react';
import { motion } from 'framer-motion';

export const PageTransition = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} // Awal: Transparan, agak turun, ngeblur
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}   // Masuk: Jelas, posisi normal
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}  // Keluar: Transparan, naik ke atas
            transition={{ duration: 0.4, ease: "easeOut" }}       // Durasi 0.4 detik
            className={className}
        >
            {children}
        </motion.div>
    );
};