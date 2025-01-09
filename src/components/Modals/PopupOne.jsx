import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";

const MySwal = withReactContent(Swal);

const PopupOne = ({ onSubmit, onClose }) => {
    useEffect(() => {
        MySwal.fire({
            title: "Formulaire - Popup 1",
            html: `
                <input id="name" class="swal2-input" placeholder="Nom" />
                <input id="email" type="email" class="swal2-input" placeholder="Email" />
            `,
            showCancelButton: true,
            preConfirm: () => {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                if (!name || !email) {
                    Swal.showValidationMessage("Veuillez remplir tous les champs !");
                }
                return { name, email };
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

export default PopupOne;
