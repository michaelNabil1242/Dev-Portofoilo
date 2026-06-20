import {
  Phone,
  Mail,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Button from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// const contactinfo = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "michael.nabil1242@gmail.com",
//     href: "mailto:michael.nabil1242@gmail.com",
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+2001080928184",
//     href: "tel:+2001080928184",
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "Cairo, Egypt",
//   },
// ];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // null, 'success', 'error'
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("serviceId:", serviceId);
      console.log("templateId:", templateId);
      console.log("publicKey:", publicKey);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Emailjs configuration is missing");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setSubmitStatus({
        type: "success",
        message: "Message is sent successfully",
      });
    } catch (err) {
      console.log("EmailJs Error", err);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message",
      });
    } finally {
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  }
  return (
    <section id="contact" className="py-32 relative overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mx-auto max-w-5xl">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 font-medium text-primary-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface border transition-all duration-300 border-border rounded-2xl outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 font-medium text-primary-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface border transition-all duration-300 border-border rounded-2xl outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 font-medium text-primary-foreground"
                >
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-surface border transition-all duration-300 border-border rounded-2xl outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send a Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
