/** @type {import('tailwindcss').Config} */

// import logoWhiteIconOnly from "../../../../assets/images/logoIconOnly.png";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        div: "0 0 2rem 0   rgba(56, 57, 76, 0.45)",
      },
      backgroundImage: {
        logoWhiteIconOnly: "url('/src/assets/images/logoIconOnly.png')",
      },
      backgroundColor: {
        "logo-icon": "rgba(255, 255, 255, 0.7)", // Change the alpha value (0.5) as needed
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100%": "200% 100%",
        16: "4rem",
      },
      colors: {
        primary: {
          darkBlue: "#154073",
          lightBlue: "#25A4DC",
          bgBlack: "#272934",
          bgGray: "#505268",
        },
        neoShades: {
          sidebarSelectedBlue: "#6c80F1",
          dashboardPanel2: "#E0B2F0",
          dashboardPanel3: "#82D7BA",
          dashboardPanel4: "#00B5E4",
          sidebarBlack: "#101113",
          dashboardHeaderBgBlack: "#18191E",
          innerComponentsGray: "#1A1B1D",
        },
        grayShades: {
          newgray: "#6B7280",
          gray: "#9CA3AF",
          lightGray: "#4B5563",
          iconGray: "#9C9EAF",
          alternateGray: "#373849",
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
    fontSize: {
      xs: [
        "0.75rem",
        {
          //12px
          lineHeight: "1rem",
          letterSpacing: "0em",
        },
      ],
      sm: [
        "0.875rem",
        {
          //14px
          lineHeight: "1.25rem",
          letterSpacing: "0em",
        },
      ],
      base: [
        "1rem",
        {
          //16px
          lineHeight: "1.25rem",
          letterSpacing: "-0.025em",
        },
      ],
      lg: [
        "1.125rem",
        {
          //18px
          lineHeight: "1.75rem",
          letterSpacing: "-0.025em",
        },
      ],
      xl: [
        "1.25rem",
        //20px
        {
          lineHeight: "1.75rem",
          letterSpacing: "-0.025em",
        },
      ],
      "2xl": [
        "1.5rem",
        //24px
        {
          lineHeight: "2rem",
          letterSpacing: "-0.025em",
        },
      ],
      "3xl": [
        "1.875rem",
        //30px
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.025em",
        },
      ],
      "4xl": [
        "2.25rem",
        //36px
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.025em",
        },
      ],
      "5xl": [
        "3rem",
        //48px
        {
          lineHeight: "2.8rem",
          letterSpacing: "-0.00em",
        },
      ],
      "6xl": [
        "3.75rem",
        //60px
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.025em",
        },
      ],
      "7xl": [
        "4.5rem",
        //72px
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.025em",
        },
      ],
      "8xl": [
        "6rem",
        //96px
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.025em",
        },
      ],
      "9xl": [
        "8rem",
        //128px
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.025em",
        },
      ],
    },
  },
  plugins: [],
};
//main dark blue -> #154073
//main logo light blue -> #25A4DC
//#FFEBD6 light orange
//#DBE9FF
//FF725E
