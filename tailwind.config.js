/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'about-header-bg':
          "url('/src/assets/backgrounds/.webp/sample-page-bg.webp')",
        'student-login-bg':
          "url('/src/assets/backgrounds/.webp/student-login-bg.webp')",
        'become-a-mentor-bg':
          "url('/src/assets/backgrounds/.webp/become-a-mentor-bg.webp')",
        'landing-page-bg':
          "url('/src/assets/backgrounds/.webp/bg-sample-1.webp')"
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms'
      }
    }
  },
  plugins: []
};
