import { useState } from "react";
import Image from 'next/image';

const WHATSAPP_NUMBER = "+923394126260";
const DEFAULT_MESSAGE = "Hello! I'm interested in working with Nxore.";

export default function FloatingWhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const handleSend = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Popup */}
        {open && (
          <div className="mb-3 w-72 bg-white rounded-2xl shadow-xl p-4 animate-fade-in-up border border-green-200">
            <div className="flex items-center mb-2">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={28} height={28} className="w-7 h-7 mr-2" />
              <span className="font-semibold text-green-700">Chat with us on WhatsApp</span>
            </div>
            <textarea
              className="w-full rounded-lg border border-gray-200 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none text-sm"
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        )}
        {/* Floating Button */}
        <button
          className={`w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center animate-bounce transition-transform duration-300 ${open ? 'scale-90' : 'scale-100'}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05C13.41 27.633 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.337-.207-3.433-.615l-.245-.09-4.646 1.217 1.24-4.522-.16-.234C6.82 18.08 6 16.573 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.709c-.293-.146-1.734-.857-2.003-.954-.269-.098-.465-.146-.662.146-.197.293-.76.954-.931 1.15-.171.195-.343.22-.636.073-.293-.146-1.236-.455-2.357-1.45-.87-.776-1.457-1.732-1.63-2.025-.171-.293-.018-.45.128-.595.132-.131.293-.342.439-.513.146-.171.195-.293.293-.488.098-.195.049-.366-.024-.513-.073-.146-.662-1.6-.907-2.19-.239-.574-.482-.497-.662-.507l-.563-.01c-.195 0-.513.073-.782.366-.269.293-1.03 1.007-1.03 2.454 0 1.447 1.055 2.846 1.202 3.043.146.195 2.077 3.176 5.037 4.327.705.242 1.255.386 1.684.494.707.18 1.35.155 1.86.094.567-.067 1.734-.709 1.98-1.395.244-.684.244-1.271.171-1.395-.073-.122-.268-.195-.561-.342z"/>
          </svg>
        </button>
      </div>
      <style jsx>{`
        .animate-fade-in-up {
          animation: fade-in-up 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
} 