import React from "react";
/* ================================= HOOK ===================================================== */

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                // El elemento o "datos" a guardar le ponemos versión, 
                //  en caso de que cambie la escructura del objeto más adelante  
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
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }, 1000);
    });

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

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage }