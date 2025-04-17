"use client";
import { motion } from "framer-motion";
import { useContactContent } from "@/hooks/contact";
import { useMyInfo } from "@/hooks/_myInfo/useMyInfo";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const ContactInfo = () => {
  const { email, location, connect } = useContactContent();
  const { socialLinks } = useMyInfo();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-gemola text-earth-dark mb-3 sm:mb-4">
          {connect.title}
        </h3>
        <p className="text-earth-brown/80 font-al text-sm sm:text-base">
          {connect.description}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4 sm:space-y-6">
        {/* Email */}
        <a
          href={`mailto:${email.value}`}
          className="flex items-start gap-3 group w-full max-w-full overflow-hidden"
        >
          <div className="relative min-w-[3rem]">
            <div
              className="w-12 h-12 bg-earth-dark/5 rounded-xl flex items-center justify-center
                         border border-earth-sand/10 group-hover:border-earth-sand/30
                         group-hover:bg-earth-dark/10 transition-all duration-300"
            >
              <EnvelopeIcon className="w-5 h-5 text-earth-dark/60 group-hover:text-earth-dark transition-colors duration-300" />
            </div>
          </div>
          <div className="space-y-1 min-w-0 flex-1">
            <p className="text-earth-brown font-al group-hover:text-earth-dark transition-colors duration-300">
              {email.label}
            </p>
            <p className="text-earth-brown/80 font-al text-sm sm:text-base break-all">
              {email.value}
            </p>
          </div>
        </a>

        {/* Location */}
        <div className="flex items-start gap-3 group">
          <div className="relative min-w-[3rem]">
            <div
              className="w-12 h-12 bg-earth-dark/5 rounded-xl flex items-center justify-center
                         border border-earth-sand/10 group-hover:border-earth-sand/30
                         group-hover:bg-earth-dark/10 transition-all duration-300"
            >
              <MapPinIcon className="w-5 h-5 text-earth-dark/60 group-hover:text-earth-dark transition-colors duration-300" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-earth-brown font-al group-hover:text-earth-dark transition-colors duration-300">
              {location.label}
            </p>
            <p className="text-earth-brown/80 font-al text-sm sm:text-base">
              {location.value}
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-3 pt-4 sm:pt-6">
        {Object.entries(socialLinks).map(
          ([platform, url], index) =>
            url && (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 sm:w-12 sm:h-12 bg-earth-dark/5 rounded-xl flex items-center justify-center
                       border border-earth-sand/10 hover:border-earth-sand/30
                       hover:bg-earth-dark/10 transition-all duration-300 group overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Background hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-earth-sand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Icon */}
                <motion.span
                  className="relative z-10 text-earth-dark/60 group-hover:text-earth-dark transition-colors duration-300"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {platform === "github" && <FaGithub className="w-5 h-5" />}
                  {platform === "linkedin" && (
                    <FaLinkedin className="w-5 h-5" />
                  )}
                  {platform === "instagram" && (
                    <FaInstagram className="w-5 h-5" />
                  )}
                </motion.span>
              </motion.a>
            )
        )}
      </div>
    </motion.div>
  );
};
