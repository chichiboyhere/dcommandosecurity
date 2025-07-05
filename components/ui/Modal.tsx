import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

// export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
//   // Close on ESC key press
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   // Close on click outside
//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if ((e.target as HTMLElement).id === "modal-backdrop") onClose();
//   };

//   return (
//     <div
//       id="modal-backdrop"
//       onClick={handleBackdropClick}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm animate-fadeIn"
//     >
//       <div className="relative bg-white rounded-lg w-full max-w-3xl shadow-xl overflow-hidden   animate-slideUp ">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-[-10] right-4 text-gray-500 hover:text-gray-800 hover:rounded-full hover:bg-gray-200 p-4"
//           aria-label="Close modal"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Modal Content */}
//         <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
//       </div>
//     </div>
//   );
// };

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-backdrop") onClose();
  };

  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm"
    >
      <div className="relative bg-white rounded-lg w-full max-w-3xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:rounded-full hover:bg-gray-200 p-4"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 max-h-[90vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

// import React, { useEffect, forwardRef } from "react";
// import { X } from "lucide-react";

// interface ModalProps {
//   onClose: () => void;
//   children: React.ReactNode;
// }

// export const Modal = forwardRef<HTMLDivElement, ModalProps>({ onClose, children }, ref) => {
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if ((e.target as HTMLElement).id === "modal-backdrop") onClose();
//   };

//   return (
//     <div
//       id="modal-backdrop"
//       onClick={handleBackdropClick}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm"
//     >
//       <div ref={ref} className="relative bg-white rounded-lg w-full max-w-3xl shadow-xl overflow-hidden">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 hover:rounded-full hover:bg-gray-200 p-4"
//           aria-label="Close modal"
//         >
//           <X className="w-5 h-5" />
//         </button>
//         <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
//       </div>
//     </div>
//   );
// }
