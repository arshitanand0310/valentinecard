import emailjs from "@emailjs/browser";

let selectedItems = [];

/* SAVE */
export const saveItems = (items) => {
    selectedItems = items;
    localStorage.setItem("snacks", JSON.stringify(items));
};

/* GET */
export const getItems = () => {
    const stored = localStorage.getItem("snacks");
    if (stored) selectedItems = JSON.parse(stored);
    return selectedItems;
};

/* RESET */
export const resetAll = () => {
    selectedItems = [];
    localStorage.removeItem("snacks");
    sessionStorage.clear();
};

/* SEND EMAIL */
export const sendToServer = async(message) => {
    try {
        const snacks = JSON.parse(localStorage.getItem("snacks") || "[]").join(", ");

        await emailjs.send(
            "service_81iabc3", // from EmailJS
            "template_tp1426g", // from EmailJS
            {
                message: message,
                snacks: snacks,
            },
            "lR-yRTxXnrPc3yfvR" // from EmailJS
        );

        return { success: true };
    } catch (err) {
        console.error("EMAIL ERROR:", err);
        return { success: false };
    }
};