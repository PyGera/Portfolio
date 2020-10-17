import Typography from "typography";

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    headerFontFamily: ["Cairo", "sans-serif"],
    bodyFontFamily: ["Nunito", "sans-serif"],
    googleFonts: [
        {
            name: "Nunito",
            styles: ["400", "700"],
        },
        {
            name: "Cairo",
            styles: ["400", "700"],
        },
    ],
});


export default typography;