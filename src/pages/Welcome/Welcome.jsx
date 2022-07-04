import React from 'react';
import { motion } from 'framer-motion';
import './transition.css';
import Form from './Form';
import Top from './Top';

export default function Welcome() {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Top />
        <Form />
      </div>
    </motion.div>
  );
}
