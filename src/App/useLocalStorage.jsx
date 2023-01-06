import React from "react";
/* ================================= HOOK ===================================================== */

function useLocalStorage(itemName, initialValue) {
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                // comprobación de una anterior existencia de datos
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;

                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem);
                // Ya terminó de cargar la aplicación, ya que todo funcionó 
                setLoading(false);
                setSincronizedItem(true)
            } catch (error) {
                setError(error);
            }
        }, 3000);
    }, [sincronizedItem]);

    // SAVE NEW TODOs ===========
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }
    const sincronizeItem = () => {
        setLoading(true);
        setSincronizedItem(false);
    };

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    };
}

export { useLocalStorage }