module.exports = {
  content: [
    "./src/pages/*/*.{js,ts,jsx,tsx}",
    "./src/components/*/*.{js,ts,jsx,tsx}",
    "./src/services/*/*.{js,ts,jsx,tsx}",
    "./src/utils/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "users-icon": "url('../assets/icons/users-icon.svg')",
        "directors-icon": "url('../assets/icons/directors-icon.svg')",
        "musicians-icon": "url('../assets/icons/musicians-icon.svg')",
        "movies-icon": "url('../assets/icons/movies-icon.svg')",
        "writers-icon": "url('../assets/icons/writers-icon.svg')",
        "roles-icon": "url('../assets/icons/roles-icon.svg')",
        "trash-icon": "url('../assets/icons/trash-icon.svg')",
        "cross-icon": "url('../assets/icons/cross-icon.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
