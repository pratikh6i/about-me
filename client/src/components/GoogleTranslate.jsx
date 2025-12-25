import { useEffect } from 'react';

function GoogleTranslate() {
  useEffect(() => {
    // Add Google Translate script
    const addScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,mr,hi,es,fr,de,ja,zh-CN,ar,pt,ru,ko',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Check if script already exists
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    }

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="google-translate-wrapper flex items-center gap-2">
      {/* Translation Icon Only */}
      <div className="translate-icon text-[var(--text-secondary)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      </div>
      <div id="google_translate_element"></div>
      <style>{`
        .google-translate-wrapper {
          display: flex;
          align-items: center;
        }
        
        .translate-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Hide Google branding and improve appearance */
        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 0 !important;
        }
        
        .goog-te-gadget .goog-te-combo {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 13px !important;
          padding: 6px 10px !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 8px !important;
          background: white !important;
          color: #374151 !important;
          cursor: pointer !important;
          outline: none !important;
          min-width: 100px !important;
        }
        
        .goog-te-gadget .goog-te-combo:hover {
          border-color: #4285f4 !important;
        }
        
        .goog-te-gadget .goog-te-combo:focus {
          border-color: #4285f4 !important;
          box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2) !important;
        }
        
        /* Hide Google logo and powered by */
        .goog-logo-link,
        .goog-te-gadget span,
        .goog-te-gadget > span {
          display: none !important;
        }
        
        /* Hide the banner that appears at top */
        .goog-te-banner-frame {
          display: none !important;
        }
        
        body {
          top: 0 !important;
        }
        
        /* Hide "Powered by Google" text */
        #goog-gt-tt, .goog-te-balloon-frame {
          display: none !important;
        }
        
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
        
        .skiptranslate iframe {
          display: none !important;
        }
        
        /* Ensure only dropdown shows */
        .goog-te-gadget > div:first-child {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

export default GoogleTranslate;
