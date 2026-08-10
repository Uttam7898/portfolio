const STORAGE_KEYS = {
  MESSAGE_COUNT: 'fastfolio_message_count',
  POPUP_SHOWN: 'fastfolio_popup_shown',
  LAST_RESET: 'fastfolio_last_reset',
  RATE_LIMIT_REACHED: 'fastfolio_rate_limit_reached',
} as const;

// Disable local rate limiting by using a very large limit
const MESSAGE_LIMIT = Number.MAX_SAFE_INTEGER;

export class FastfolioTracking {
  static incrementMessageCount(): number {
    if (typeof window === 'undefined') return 0;
    
    // Don't reset for rate limiting - it's a permanent limit
    // Only increment if not already at limit
    const currentCount = parseInt(localStorage.getItem(STORAGE_KEYS.MESSAGE_COUNT) || '0');
    const newCount = currentCount + 1;
    localStorage.setItem(STORAGE_KEYS.MESSAGE_COUNT, newCount.toString());
    return newCount;
  }
  
  static getMessageCount(): number {
    if (typeof window === 'undefined') return 0;
    return parseInt(localStorage.getItem(STORAGE_KEYS.MESSAGE_COUNT) || '0');
  }
  
  static shouldShowPopup(): boolean {
    if (typeof window === 'undefined') return false;
    // Disable popup by default when removing local rate limit
    return false;
  }
  
  static hasReachedLimit(): boolean {
    // Rate limiting disabled
    return false;
  }
  
  static shouldShowRateLimitPopup(): boolean {
    return false;
  }
  
  static getRemainingMessages(): number {
    const count = this.getMessageCount();
    return Math.max(0, MESSAGE_LIMIT - count);
  }
  
  static markPopupShown(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.POPUP_SHOWN, 'true');
  }
  
  static resetSession(): void {
    if (typeof window === 'undefined') return;
    // Reset only the popup state and timestamp
    localStorage.setItem(STORAGE_KEYS.POPUP_SHOWN, 'false');
    localStorage.setItem(STORAGE_KEYS.LAST_RESET, Date.now().toString());
  }
  
  static resetForTesting(): void {
    // Admin/testing function to fully reset
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS.MESSAGE_COUNT);
    localStorage.removeItem(STORAGE_KEYS.POPUP_SHOWN);
    localStorage.removeItem(STORAGE_KEYS.RATE_LIMIT_REACHED);
    localStorage.removeItem(STORAGE_KEYS.LAST_RESET);
  }
}