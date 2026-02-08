import { createContext, useContext, useState, useCallback } from 'react';

const SnackbarContext = createContext(null);

export function SnackbarProvider({ children }) {
    const [snackbars, setSnackbars] = useState([]);

    const showSnackbar = useCallback((message, type = 'info', duration = 4000) => {
        const id = Date.now() + Math.random();
        const newSnackbar = { id, message, type, duration };

        setSnackbars(prev => [...prev, newSnackbar]);

        setTimeout(() => {
            setSnackbars(prev => prev.filter(s => s.id !== id));
        }, duration);
    }, []);

    const removeSnackbar = useCallback((id) => {
        setSnackbars(prev => prev.filter(s => s.id !== id));
    }, []);

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <SnackbarContainer snackbars={snackbars} onRemove={removeSnackbar} />
        </SnackbarContext.Provider>
    );
}

export function useSnackbar() {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
}

function SnackbarContainer({ snackbars, onRemove }) {
    return (
        <div className="snackbar-container">
            {snackbars.map(snack => (
                <Snackbar key={snack.id} {...snack} onClose={() => onRemove(snack.id)} />
            ))}
        </div>
    );
}

function Snackbar({ message, type, onClose }) {
    const icons = {
        success: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        ),
        error: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ),
        info: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        warning: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
    };

    return (
        <div className={`snackbar snackbar-${type}`}>
            {icons[type]}
            <span className="flex-1">{message}</span>
            <button
                onClick={onClose}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="snackbar-progress"></div>
        </div>
    );
}
