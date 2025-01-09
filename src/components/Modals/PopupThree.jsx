import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";

const MySwal = withReactContent(Swal);

const PopupThree = ({ onSubmit, onClose }) => {
    useEffect(() => {
        MySwal.fire({
            title: "Feedback - Popup 3",
            html: `
                <textarea id="feedback" class="swal2-textarea" placeholder="Votre commentaire"></textarea>
            `,
            showCancelButton: true,
            preConfirm: () => {
                const feedback = document.getElementById("feedback").value;
                if (!feedback) {
                    Swal.showValidationMessage("Le champ ne peut pas être vide !");
                }
                return { feedback };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                onSubmit(result.value);
            }
            onClose();
        });
    }, [onSubmit, onClose]);

    return null;
};

export default PopupThree;
