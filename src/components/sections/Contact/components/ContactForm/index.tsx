"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useContactContent, useContactForm } from "@/hooks/contact";
import { SuccessNotification } from "./SuccessNotification";

export const ContactForm = () => {
  const { form } = useContactContent();
  const {
    formState,
    isSubmitting,
    showSuccess,
    formRef,
    handleSubmit,
    handleChange,
  } = useContactForm();

  return (
    <div className="relative">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && <SuccessNotification />}
      </AnimatePresence>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group">
          <motion.input
            type="text"
            name="name"
            required
            className="w-full bg-earth-dark/5 border border-earth-dark/10 rounded-xl px-6 py-4 outline-none
                     focus:border-earth-sand/20 transition-colors duration-300 font-al
                     text-earth-dark/90 placeholder:text-earth-dark/40
                     focus:bg-earth-dark/[0.075]"
            placeholder={form.placeholders.name}
            whileFocus={{ scale: 1.01 }}
            onChange={handleChange("name")}
          />
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-earth-sand/20 to-earth-sand/10 opacity-0
                     rounded-xl blur-xl transition-opacity duration-300"
            animate={{
              opacity: formState.name ? 0.5 : 0,
            }}
          />
        </div>

        <div className="relative group">
          <motion.input
            type="email"
            name="email"
            required
            className="w-full bg-earth-dark/5 border border-earth-dark/10 rounded-xl px-6 py-4 outline-none
                     focus:border-earth-sand/20 transition-colors duration-300 font-al
                     text-earth-dark/90 placeholder:text-earth-dark/40
                     focus:bg-earth-dark/[0.075]"
            placeholder={form.placeholders.email}
            whileFocus={{ scale: 1.01 }}
            onChange={handleChange("email")}
          />
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-earth-sand/20 to-earth-sand/10 opacity-0
                     rounded-xl blur-xl transition-opacity duration-300"
            animate={{
              opacity: formState.email ? 0.5 : 0,
            }}
          />
        </div>

        <div className="relative group">
          <motion.textarea
            name="message"
            required
            rows={5}
            className="w-full bg-earth-dark/5 border border-earth-dark/10 rounded-xl px-6 py-4 outline-none
                     focus:border-earth-sand/20 transition-colors duration-300 font-al resize-none
                     text-earth-dark/90 placeholder:text-earth-dark/40
                     focus:bg-earth-dark/[0.075]"
            placeholder={form.placeholders.message}
            whileFocus={{ scale: 1.01 }}
            onChange={handleChange("message")}
          />
          <motion.div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-earth-sand/20 to-earth-sand/10 opacity-0
                     rounded-xl blur-xl transition-opacity duration-300"
            animate={{
              opacity: formState.message ? 0.5 : 0,
            }}
          />
        </div>

        <motion.button
          type="submit"
          className="relative w-full bg-earth-dark text-earth-light rounded-xl px-6 py-4 font-al
                   overflow-hidden group"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
        >
          {/* Animated Background - Meteors Effect */}
          {!isSubmitting && (
            <>
              <motion.div
                className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-earth-sand/40 to-transparent 
                         pointer-events-none"
                style={{
                  top: "20%",
                  left: "-10%",
                  rotate: "25deg",
                }}
                animate={{
                  x: ["0vw", "15vw"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <motion.div
                className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-earth-sand/40 to-transparent 
                         pointer-events-none"
                style={{
                  top: "50%",
                  left: "-10%",
                  rotate: "25deg",
                }}
                animate={{
                  x: ["0vw", "15vw"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.15,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <motion.div
                className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-earth-sand/40 to-transparent 
                         pointer-events-none"
                style={{
                  top: "80%",
                  left: "-10%",
                  rotate: "25deg",
                }}
                animate={{
                  x: ["0vw", "15vw"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </>
          )}

          {/* Shine Border Effect */}
          <motion.div
            className="absolute inset-px rounded-[11px] pointer-events-none"
            style={{
              background: `linear-gradient(130deg, rgba(187, 165, 143, 0) 50%, rgba(187, 165, 143, 0.3))`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Button Content */}
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-earth-light/30 border-t-earth-light rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span>{form.button.sending}</span>
              </>
            ) : (
              <>
                <motion.span
                  animate={{ x: [0, -4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {form.button.default}
                </motion.span>
                <motion.svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{
                    x: [0, 4, 0],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                      pathLength: [0.3, 1, 0.3],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.svg>
              </>
            )}
          </span>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at center, rgba(187, 165, 143, 0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </motion.form>
    </div>
  );
};
