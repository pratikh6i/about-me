import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SnackbarContext = createContext();

export function useSnackbar() {
    const ctx = useContext(SnackbarContext);
    if (!ctx) throw new Error('useSnackbar must be inside SnackbarProvider');
    return ctx;
}

export function SnackbarProvider({ children }) {
    const [snackbars, setSnackbars] = useState([]);

    const showSnackbar = useCallback((message, type = 'info', duration = 3500) => {
        const id = Date.now();
        setSnackbars((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setSnackbars((prev) => prev.filter((s) => s.id !== id));
        }, duration);
    }, []);

    const remove = (id) => setSnackbars((prev) => prev.filter((s) => s.id !== id));

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}

            {/* Snackbar container */}
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 items-end">
                <AnimatePresence>
                    {snackbars.map((s) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => remove(s.id)}
                            className={`px-5 py-3 rounded-xl text-sm font-medium shadow-elevated cursor-pointer max-w-sm ${s.type === 'success'
                                    ? 'bg-sage-700 text-white'
                                    : s.type === 'error'
                                        ? 'bg-red-600 text-white'
                                        : s.type === 'warning'
                                            ? 'bg-brand-500 text-white'
                                            : 'bg-charcoal-900 text-white'
                                }`}
                        >
                            {s.message}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </SnackbarContext.Provider>
    );
}
