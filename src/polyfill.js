// Comprehensive polyfill for localStorage in Node.js/build environment
(function() {
  // Only run in non-browser environments
  if (typeof window !== 'undefined') {
    return;
  }

  // Create a robust mock storage implementation
  const createMockStorage = () => {
    const storage = {};
    return {
      length: 0,
      clear() { 
        Object.keys(storage).forEach(key => delete storage[key]);
        this.length = 0;
      },
      getItem(key) { 
        return storage[key] || null; 
      },
      key(index) { 
        const keys = Object.keys(storage);
        return keys[index] || null;
      },
      removeItem(key) { 
        if (key in storage) {
          delete storage[key];
          this.length = Math.max(0, this.length - 1);
        }
      },
      setItem(key, value) { 
        if (!(key in storage)) {
          this.length++;
        }
        storage[key] = String(value);
      }
    };
  };

  const mockStorage = createMockStorage();
  
  // Set up global environment
  if (typeof global !== 'undefined') {
    global.localStorage = mockStorage;
    global.sessionStorage = createMockStorage();
    
    // Create comprehensive window mock
    global.window = {
      localStorage: mockStorage,
      sessionStorage: createMockStorage(),
      navigator: {
        language: 'en-US',
        languages: ['en-US', 'en'],
        userAgent: 'Node.js',
        platform: 'Node.js',
        cookieEnabled: true
      },
      location: {
        pathname: '/',
        search: '',
        hash: '',
        href: 'http://localhost:3000/',
        origin: 'http://localhost:3000',
        hostname: 'localhost',
        port: '3000',
        protocol: 'http:'
      },
      document: {
        documentElement: { lang: 'en' },
        cookie: '',
        createElement: () => ({ style: {} }),
        getElementById: () => null,
        querySelector: () => null,
        querySelectorAll: () => [],
        addEventListener: () => {},
        removeEventListener: () => {}
      },
      addEventListener: () => {},
      removeEventListener: () => {},
      getComputedStyle: () => ({}),
      matchMedia: () => ({
        matches: false,
        addListener: () => {},
        removeListener: () => {}
      }),
      requestAnimationFrame: (cb) => setTimeout(cb, 16),
      cancelAnimationFrame: (id) => clearTimeout(id),
      console: console,
      setTimeout: setTimeout,
      clearTimeout: clearTimeout,
      setInterval: setInterval,
      clearInterval: clearInterval
    };
    
    // Override the global property getters/setters
    try {
      Object.defineProperty(global, 'localStorage', {
        value: mockStorage,
        configurable: true,
        writable: true,
        enumerable: true
      });
      
      Object.defineProperty(global, 'sessionStorage', {
        value: createMockStorage(),
        configurable: true,
        writable: true,
        enumerable: true
      });
      
      Object.defineProperty(global, 'window', {
        value: global.window,
        configurable: true,
        writable: true,
        enumerable: true
      });
    } catch (e) {
      // Fallback - direct assignment
      global.localStorage = mockStorage;
      global.sessionStorage = createMockStorage();
    }
  }
})();