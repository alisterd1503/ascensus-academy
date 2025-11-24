import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { EMAILJS } from "../constants";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        formRef.current,
        EMAILJS.publicKey
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 rounded-md shadow-md p-6 flex-1">
      {success ? (
        <p className="text-primary-600 font-semibold text-center">
          Thank you - your message has been sent!
        </p>
      ) : (
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border rounded-md focus:ring-primary-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border rounded-md focus:ring-primary-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full p-3 border rounded-md h-32 resize-none focus:ring-primary-500 focus:outline-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-white font-medium p-3 rounded-md hover:bg-primary-700 transition disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>

        </form>
      )}
    </div>
  );
};

export default ContactForm;