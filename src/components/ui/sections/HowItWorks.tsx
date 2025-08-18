"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const words: string[] = ["Pay", "Send", "Receive", "Exchange", "Get paid"];

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 sm:mt-40 relative px-4 sm:px-8">
      <div className="text-center">
        <h1 className="font-bold uppercase text-4xl sm:text-6xl lg:text-9xl">
          A new way to
        </h1>
        {words.map((word, i) => (
          <motion.h1
            key={word}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.3,
            }}
            viewport={{ once: false, amount: 0.8 }}
            className="font-bold uppercase text-4xl sm:text-6xl lg:text-9xl text-blue-700"
          >
            {word}
          </motion.h1>
        ))}
      </div>

      <div className="mt-20 sm:mt-40 flex flex-col">
        <div className="relative h-[500px] sm:h-[700px] mt-20 sm:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-5 rotate-45"
          >
            <video
              src="https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/651d577fdc1891ff4e4b4bed_Card-02-transcode.webm"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-20 sm:w-28 md:w-36 lg:w-44"
            />
          </motion.div>

          {/* Top right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 right-6 rotate-45"
          >
            <video
              src="https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/651d58f97d399d3bfba8b0d5_Card-05-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-20 sm:w-28 md:w-36 lg:w-44"
            />
          </motion.div>

          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 right-5 rotate-45"
          >
            <video
              src="https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/651d598540cf0510826d67d0_Card-07-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-20 sm:w-28 md:w-36 lg:w-44"
            />
          </motion.div>

          {/* Bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-5 rotate-45"
          >
            <video
              src="https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/6526a875a3e147a5a2dd8e4b_cursor-card-desktop01-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-20 sm:w-28 md:w-36 lg:w-44"
            />
          </motion.div>

          {/* Top center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-10 left-1/2 -translate-x-1/2"
          >
            <video
              src="https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/6543e531eca6def09e78b0c5_cursor-card-desktop-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-20 sm:w-28 md:w-36 lg:w-44"
            />
          </motion.div>

          {/* Bottom center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <video
              src="https://cdn.prod.website-files.com/65035c417fe69396bd8c0d5c/651d5a7d912ce39a76c8da9a_Card-04-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-md w-20 sm:w-28 md:w-36 lg:w-44"
            />
          </motion.div>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-900">
              Your borderless <br /> account awaits
            </h2>
          </div>
        </div>

        <div className="flex flex-col mt-6 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
            Borderless multi-currency accounts
          </h2>
          <p className="text-lg sm:text-2xl max-w-2xl text-neutral-700 mb-4">
            Open multi-currency accounts from anywhere. Send, receive, hold and
            exchange digital currencies instantly at the real exchange rate.
          </p>
          <Link
            href="#"
            className="text-blue-700 text-lg sm:text-2xl hover:underline"
          >
            Learn about Global Accounts →
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col mt-8 sm:mt-12">
          <video
            src="/images/accept-payments-new-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col mt-6 sm:mt-10 mb-10 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
            Accept payments everywhere
          </h2>
          <p className="text-lg sm:text-2xl max-w-2xl text-neutral-700 mb-4">
            Get paid anywhere - bank transfers, mobile money, digital wallets
            and more in 80+ markets. Receive stablecoins instantly or settle
            into your local currency. Near-zero fees.
          </p>
          <Link
            href="#"
            className="text-blue-700 text-lg sm:text-2xl hover:underline"
          >
            Learn about Payments →
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-blue-600 lg:py-14 w-screen sm:py-8 sm:px-8">
        <video
          src="/images/transfers-desktop-new.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full  sm:h-[800px]"
        />
        <div className="flex flex-col mt-6 sm:mt-10 p-4">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-50 mb-4">
            Move money globally in seconds
          </h2>
          <p
            className="text-lg sm:text-2xl max-w-2xl
           text-gray-300 mb-4"
          >
            Transfer funds faster to and from your digital accounts via bank
            transfers or mobile wallets in 80+ countries. Enjoy real-time
            payments at a fraction of the cost of bank wires.
          </p>
          <Link
            href="#"
            className="text-gray-50 text-lg sm:text-2xl hover:underline"
          >
            Learn about Transfers →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
