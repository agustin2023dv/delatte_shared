

export const getCloudinarySignature = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/cloudinary/generate-signature");
      if (!response.ok) throw new Error("No se pudo obtener la firma");
  
      return await response.json();
    } catch (error) {
      console.error("Error al obtener la firma de Cloudinary:", error);
      return null;
    }
  };
  
  