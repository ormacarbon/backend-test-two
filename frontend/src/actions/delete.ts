;

const DeleteBeer = async (id: number | undefined) => {
    await fetch("http://localhost:5000/api/v1/beer/" + id, { method: "DELETE" }).then(res => res.json().then(r => (r)))
}

export default DeleteBeer;