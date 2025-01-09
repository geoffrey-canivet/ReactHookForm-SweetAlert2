import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";

const MySwal = withReactContent(Swal);

const PopupTwo = ({ onSubmit, onClose }) => {
    useEffect(() => {
        MySwal.fire({
            title: "Formulaire - Popup 2",
            html: `
                <input id="product" class="swal2-input" placeholder="Produit" />
                <input id="quantity" type="number" class="swal2-input" placeholder="Quantité" />
            `,
            showCancelButton: true,
            preConfirm: () => {
                const product = document.getElementById("product").value;
                const quantity = document.getElementById("quantity").value;
                if (!product || !quantity) {
                    Swal.showValidationMessage("Veuillez remplir tous les champs !");
                }
                return { product, quantity };
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

export default PopupTwo;
