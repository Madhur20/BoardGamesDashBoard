import React from 'react';

const setLocalStorageLogin = (val: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("login", val);
    }
}

const getLocalStorageLogin = () => {
    let isLoggedIn;
    if (typeof window !== 'undefined') {
        isLoggedIn = localStorage.getItem("login");
    }
    if (isLoggedIn === null) isLoggedIn = "false"
    return isLoggedIn;
}