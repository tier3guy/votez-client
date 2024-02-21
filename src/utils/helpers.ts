// External Imports
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using both clsx and Tailwind CSS's twMerge.
 * @param {...ClassValue[]} inputs - Variable number of class names or class condition objects.
 * @returns {string} - A string containing the merged class names.
 */
export const cn = (...inputs: ClassValue[]): string => {
    // Merge class names using clsx
    const mergedClassNames = clsx(inputs);

    // Further merge class names using Tailwind CSS's twMerge
    return twMerge(mergedClassNames);
};
