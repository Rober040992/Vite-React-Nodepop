import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewAdvert } from "./service";

function NewAdvertPage() {
  const navigate = useNavigate();

  // Estados para cada campo del formulario
  const [name, setName] = useState("");
  const [sale, setSale] = useState<boolean | null>(null);
  const [price, setPrice] = useState<number | "">("");
  const [tags, setTags] = useState<string[]>([]);
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Manejadores de cambios en los inputs
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleSaleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSale(e.target.value === "true");
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value ? Number(e.target.value) : "");
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTags((prevTags) => prevTags.includes(value) ? prevTags.filter((tag) => tag !== value) : [...prevTags, value]);
  };
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) setPhoto(e.target.files[0]);
  };

  // Validación: habilitar el botón solo si los campos obligatorios están completos
  const isFormValid = name.trim() !== "" && sale !== null && price !== "" && tags.length > 0;

  // Manejo del envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setError(null);

    try {
      await createNewAdvert({ name, sale, price: Number(price), tags, photo});
      navigate("/adverts"); // Redirigir tras éxito
    } catch (err) {
      setError("Error al crear el anuncio. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>CREATE</h1>
      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <label htmlFor="name">NAME:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        {/* Tipo de operación */}
        <fieldset>
          <legend>Operation:</legend>
          <label>
            <input type="radio" name="sale" value="true" checked={sale === true} onChange={handleSaleChange} required />
            to sell
          </label>
          <label>
            <input type="radio" name="sale" value="false" checked={sale === false} onChange={handleSaleChange} required />
            to buy
          </label>
        </fieldset>

        {/* Precio */}
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={handlePriceChange} required />

        {/* Tags */}
        <fieldset>
          <legend>Tags:</legend>
          {["lifestyle", "motor", "work", "mobile"].map((tag) => (
            <label key={tag}>
              <input type="checkbox" value={tag} checked={tags.includes(tag)} onChange={handleTagsChange} />
              {tag}
            </label>
          ))}
        </fieldset>

        {/* Foto */}
        <label htmlFor="photo">Foto:</label>
        <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />

        {/* Mensaje de error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Botón de enviar */}
        <button type="submit" disabled={!isFormValid || loading}>
          {loading ? "Creando..." : "Crear anuncio"}
        </button>
      </form>
    </div>
  );
}

export default NewAdvertPage;
