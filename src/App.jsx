import { useState } from "react";
import PopupOne from "./components/Modals/PopupOne.jsx";
import PopupTwo from "./components/Modals/PopupTwo.jsx";
import PopupThree from "./components/Modals/PopupThree.jsx";

function App() {
    const [formData, setFormData] = useState(null);
    const [activePopup, setActivePopup] = useState(null);

    const handleFormSubmit = (data) => {
        console.log("Form Data Received in App:", data);
        setFormData(data);
        setActivePopup(null);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-800">
                <div className="inline-flex rounded-md shadow-sm">
                    <button
                        onClick={() => setActivePopup("popup1")}
                        className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => setActivePopup("popup2")}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        Settings
                    </button>
                    <button
                        onClick={() => setActivePopup("popup3")}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                    >
                        Messages
                    </button>
                </div>
                {/* Affichage des données reçues */}
                <div className="mt-5 text-center">
                    {formData && (
                        <div className="text-white">
                            <h2 className="font-bold text-lg">Données reçues :</h2>
                            <pre>{JSON.stringify(formData, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </div>

            {/* Popups conditionnelles */}
            {activePopup === "popup1" && (
                <PopupOne onSubmit={handleFormSubmit} onClose={() => setActivePopup(null)} />
            )}
            {activePopup === "popup2" && (
                <PopupTwo onSubmit={handleFormSubmit} onClose={() => setActivePopup(null)} />
            )}
            {activePopup === "popup3" && (
                <PopupThree onSubmit={handleFormSubmit} onClose={() => setActivePopup(null)} />
            )}


        </>
    );
}

export default App;
