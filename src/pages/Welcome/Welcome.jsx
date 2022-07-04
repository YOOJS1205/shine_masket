import React from 'react';
// import { Transition } from 'react-transition-group';
import { motion } from 'framer-motion';
import './transition.css';
import Form from './Form';
import Top from './Top';

export default function Welcome() {
  return (
    // <Transition in={true} timeout={100} appear>
    //   {
    //     (status) => (
    //       <div className={`fade-${status}`}>
    //         <Top />
    //         <Form />
    //       </div>
    //     )
    //   }
    // </Transition>
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
