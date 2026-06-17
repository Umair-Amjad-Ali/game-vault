import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a numeric string or number with commas for thousands.
 */
export function formatPoints(value: string | number): string {
  const clean = String(value).replace(/\D/g, "");
  return clean ? Number(clean).toLocaleString("en-US") : "";
}

/**
 * Strips commas from a formatted numeric string and returns a raw number.
 */
export function parsePoints(value: string): number {
  if (!value) return 0;
  const clean = value.replace(/,/g, "");
  const num = Number(clean);
  return isNaN(num) ? 0 : num;
}

/**
 * Handles formatting for a text input that displays numbers with commas.
 * Preserves the cursor position.
 */
export function handleNumberWithCommasChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: (val: string) => void
) {
  const input = e.target;
  const originalValue = input.value;
  const selectionStart = input.selectionStart || 0;
  
  // Count how many digits exist before the cursor in the original text
  const textBeforeCursor = originalValue.substring(0, selectionStart);
  const digitsBeforeCursor = textBeforeCursor.replace(/\D/g, "").length;
  
  const clean = originalValue.replace(/\D/g, "");
  const formatted = clean ? Number(clean).toLocaleString("en-US") : "";
  
  setValue(formatted);
  
  // Restore cursor position in the next paint frame to prevent cursor jumping
  requestAnimationFrame(() => {
    if (input) {
      let newCursor = 0;
      let digitCount = 0;
      for (let i = 0; i < formatted.length; i++) {
        if (/\d/.test(formatted[i])) {
          digitCount++;
        }
        if (digitCount === digitsBeforeCursor) {
          newCursor = i + 1;
          break;
        }
      }
      input.setSelectionRange(newCursor, newCursor);
    }
  });
}

