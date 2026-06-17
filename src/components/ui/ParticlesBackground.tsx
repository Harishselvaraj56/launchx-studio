import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // loadSlim loads the core tsparticles without heavy shapes (like images/polygons) for better performance
    await loadSlim(engine);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: "transparent",
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: ["attract", "grab"],
                parallax: {
                  enable: true,
                  force: 25,
                  smooth: 20,
                },
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 250,
                duration: 0.4,
                factor: 0.3,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 0.3,
                  color: "#ff7a00",
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#d1d5db", "#9ca3af", "#ff7a00", "#ff7a00"],
            },
            links: {
              color: "#9ca3af",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.02,
                color: "#ff7a00",
              },
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 70,
            },
            opacity: {
              value: { min: 0.1, max: 0.7 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "triangle"],
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
