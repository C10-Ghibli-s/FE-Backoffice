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
        usersIcon: "url('../assets/icons/users-icon.svg')",
        directorsIcon: "url('../assets/icons/directors-icon.svg')",
        musiciansIcon: "url('../assets/icons/musicians-icon.svg')",
        moviesIcon: "url('../assets/icons/movies-icon.svg')",
        writersIcon: "url('../assets/icons/writers-icon.svg')",
        rolesIcon: "url('../assets/icons/roles-icon.svg')",
        "trash-icon": "url('../assets/icons/trash-icon.svg')",
        "cross-icon": "url('../assets/icons/cross-icon.svg')",
      },
      boxShadow: {
        custom: "0px 8px 18px -12px #6D7FE0;",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
