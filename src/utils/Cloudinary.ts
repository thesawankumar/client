export const uploadToCloudinary = async (file: File): Promise<string | null> => {
    try {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

        console.log(import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        console.log(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: data,
            }
        );

        const result = await response.json();
        return result.secure_url;
    } catch (error) {
        console.error("Cloudinary upload failed:", error);
        return null;
    }
};
