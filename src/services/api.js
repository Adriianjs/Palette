const API_URL = "https://www.thecolorapi.com";

export const generatePalette = async (baseColor = null) => {
  try {
    const hex =
      baseColor ||
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    const response = await fetch(
      `${API_URL}/scheme?hex=${hex}&mode=analogic&count=5`
    );
    const data = await response.json();

    if (!data.colors) throw new Error("Invalid response format");
    return data.colors.map((color) => color.hex.value);
  } catch (error) {
    console.error("API Error:", error);
  }
};
