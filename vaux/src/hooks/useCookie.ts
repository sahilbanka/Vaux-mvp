import { useState } from "react";
import Cookies from 'js-cookie';

export const useCookie = (keyName: any, defaultValue: string, options?: any) => {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = Cookies.get(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                Cookies.set(keyName, defaultValue, options);
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });

    const setValue = (newValue: string) => {
        try {
            Cookies.set(keyName, newValue, options);
        } catch (err) { }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};