'use client';

import { ReactNode } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({
    open,
    onClose,
    children,
}: ModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-5">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}