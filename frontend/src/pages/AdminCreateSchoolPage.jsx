import axios from "axios";
import { useState } from "react";

export default function AdminCreateSchoolPage() {
  const [school, setSchool] = useState({
    name: "",
    capacity: "",
    country: "",
    updatedAt: null,
    published: 0,
    slug: "",
  });

  const postSchool = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/articles`, { ...school })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  return (
    <div>
      <p>Page de création de l'école</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postSchool();
        }}
      >
        <input
          type="text"
          value={school.name}
          placeholder="Nom"
          onChange={(e) =>
            setSchool({
              ...school,
              name: e.target.value,
            })
          }
        />
        <input
          type="number"
          value={school.capacity}
          placeholder="nombre d'élèves"
          onChange={(e) =>
            setSchool({
              ...school,
              content: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={school.country}
          placeholder="Ville"
          onChange={(e) =>
            setSchool({
              ...school,
              country: e.target.value,
            })
          }
        />
        <input type="submit" value="Créer une école" />
      </form>
    </div>
  );
}
