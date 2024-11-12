import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import React from 'react';
import './ParticlesBg.css';

function ParticlesBg({ theme }) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine); // Cargar la versión slim de particles
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  // Define las opciones de las partículas según el tema
  const particleOptions = {
    background: {
      color: {
        value: theme === 'light' ? "#ffffff" : "#000000", // Fondo blanco o negro
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
      },
    },
    particles: {
      number: {
        value: 245,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: theme === 'light' ? "#ffcc00" : "#ffffff", // Color amarillo o blanco
      },
      shape: {
        type: theme === 'light' ? "circle" : "star", // Círculos o estrellas
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1,
          sync: true,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "bottom",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
        bounce: false,
      },
    },
    retina_detect: true,
  };

  useEffect(() => {
    // Agregar una transición suave a los cambios de fondo
    const particlesElement = document.getElementById('tsparticles');
    if (particlesElement) {
      particlesElement.style.transition = "background-color 0.5s ease-in-out";
    }
  }, [theme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
}

export default ParticlesBg;
