import { useState, useRef, useEffect } from "react";

function RequestDescription({request}) {
    const [showModal, setShowModal] = useState(false);
    const [showPlus, setShowPlus] = useState(false);
    const descRef = useRef();

    useEffect(() => {
        const el = descRef.current;
        if (el && el.scrollHeight > el.clientHeight) {
            setShowPlus(true);
        }
    }, []);

    return (
        <div>
            <div className="relative mt-3">
                <span className="font-semibold text-primary">Description :</span>
                <p ref={descRef} className="description-line-clamp">
                    {request.description}
                </p>
                {showPlus && (
                <button className="absolute right-0 bottom-0 text-primary font-bold" onClick={() => setShowModal(true)}>
                    +
                </button>
                )}
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-6 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
                        <button className="absolute top-2 right-2 text-gray-500 font-bold text-2xl" onClick={() => setShowModal(false)}>
                            &times;
                        </button>
                        <h3 className="text-xl font-semibold mb-4">Description complète</h3>
                        <p className="text-gray-700 whitespace-pre-line">{request.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RequestDescription;