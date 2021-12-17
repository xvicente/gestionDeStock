import {useState, useRef} from 'react';
import ListeProduits from "./ListeProduits.js";

function ProduitForm({addProduit}) {
	
	const nameRef = useRef();
	
	const [name, setName] = useState(" ");
	const [quantity, setQuantity] = useState(" ");
	const [description, setDescription] = useState(" ");
	function input (e) {
		switch(e.target.name){
			case 'name':
				setName(e.target.value);
				break;
			case 'quantity':
				setQuantity(e.target.value);
				break;
			case 'description':
				setDescription(e.target.value);
				break;
		}
	};	
	
	function ajouter() {
		let data = {
			id:null,
			name:name,
			quantity:quantity,
			description:description
		}
		addProduit(data);
	}
	
	return (
		<div>
			<input onChange={input} name='name' type="text" placeholder="Nom du produit" /><br />
			<input onChange={input} name='quantity' type="number" min="0" step="1" placeholder="Quantité" /><br />
			<textarea onChange={input} name='description' placeholder="Description du produit" /><br />
			<button onClick={ajouter}>Ajouter</button>
		</div>
	);
}

export default function ProduitState({initProduits}) {
	const [prods, setProds] = useState(initProduits);
	function addProduit(newProduit) {
		setProds(prods.concat({id:prods.length, name:newProduit['name'],quantity: newProduit['quantity'],description: newProduit['description']}));
	}
	return <>
		<ProduitForm addProduit={addProduit}/>
		<ListeProduits produits={prods} setProduits={setProds} />
	</>;
}

