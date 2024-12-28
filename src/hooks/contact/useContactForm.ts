import { useState, useRef, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    if (formRef.current) formRef.current.reset();
    setFormState({ name: "", email: "", message: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return {
    formState,
    isSubmitting,
    showSuccess,
    formRef,
    handleSubmit,
    handleChange,
  };
};
