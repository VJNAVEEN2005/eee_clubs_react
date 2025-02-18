import React from "react";
import { motion } from "framer-motion";

function Club_Details(props) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl mt-5 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 border-b-2 border-red-200 pb-2">
          {props.title}
        </h1>
      </motion.div>

      {/* Mentors Section */}
      <motion.div variants={itemVariants} className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4">
          Mentors
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          {props.mentor1 && (
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 bg-red-50 p-4 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <a
                href={props.mentor1_link}
                className="text-lg md:text-xl font-medium text-gray-800 hover:text-red-600 transition-colors"
              >
                {props.mentor1}
              </a>
            </motion.div>
          )}
          {props.mentor2 && (
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 bg-red-50 p-4 rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <a
                href={props.mentor2_link}
                className="text-lg md:text-xl font-medium text-gray-800 hover:text-red-600 transition-colors"
              >
                {props.mentor2}
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Members Table */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Members
        </h2>
        <motion.div
          className="overflow-hidden rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <table className="w-full text-left text-gray-800">
            <thead>
              <tr className="bg-red-600 text-white uppercase text-sm">
                <th className="px-6 py-3 font-semibold">Name</th>
                <th className="px-6 py-3 font-semibold">Year</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((data, index) => (
                <motion.tr
                  key={index}
                  custom={index}
                  variants={tableRowVariants}
                  className="bg-white border-b hover:bg-red-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium uppercase">{data.name}</td>
                  <td className="px-6 py-4">{data.year}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>

      {/* Club Details */}
      {props.details && (
        <motion.div
          variants={itemVariants}
          className="prose prose-lg max-w-none bg-red-50 p-6 rounded-xl"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">About the Club</h2>
          <div className="text-gray-700">{props.details}</div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Club_Details;