export const particlesConfig = {
  background: {
    color: {
      value: "#ffffff",
    },
  },
  fpsLimit: 120,
      interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  particles: {
    color: {
      value: "#283a64",
    },
    links: {
      color: "#283a64",
      distance: 150,
      enable: true,
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
      random: true,
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 0.1,
        sync: false,
      },
    },
  },
  detectRetina: true,
}; 