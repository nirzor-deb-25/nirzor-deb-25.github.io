# Nirzor Deb | Embedded Systems, Firmware & IoT Portfolio

**Build. Debug. Understand.**

[View Portfolio](https://nirzor-deb-25.github.io/) · [Explore Projects](https://nirzor-deb-25.github.io/projects.html) · [GitHub Profile](https://github.com/nirzor-deb-25) · [LinkedIn](https://www.linkedin.com/in/nirzor-deb-opi-635846336/)

---

## About this portfolio

I'm Nirzor Deb, an engineering student at **LAB University of Applied Sciences, Finland**, focused on **embedded systems, low-level firmware, IoT and on-device intelligence**.

This website brings together **16 selected projects** involving embedded C, STM32/ARM Cortex-M microcontrollers, peripheral drivers, real-time systems, connected sensors and exploratory machine-learning applications. The goal is to make the technical work easy to navigate, review and discuss — from implementation decisions to testing and limitations.

I am interested in **embedded software and firmware internship opportunities**, as well as industry-oriented bachelor's thesis projects.

> **Portfolio principle:** The source repositories and their documentation are the references for implementation, testing and measured results. The website's animated diagrams are explanatory illustrations, not live hardware data or engineering measurements.

## Selected engineering projects

### 01 — C programming & low-level fundamentals

| Project | Focus | Source |
| --- | --- | --- |
| **Custom Memory Allocator in C** | Memory pools, heap allocation, splitting/coalescing and allocator testing | [Repository](https://github.com/nirzor-deb-25/embedded-c-memory-allocator-) |
| **Register-Level LED & Button Control** | STM32F407 GPIO, RCC, memory-mapped I/O, register-level control and debouncing | [Repository](https://github.com/nirzor-deb-25/stm32_register_led_button) |

### 02 — STM32 peripherals & firmware

| Project | Focus | Source |
| --- | --- | --- |
| **PWM LED Dimmer** | Hardware timers, PWM configuration and LED brightness control | [Repository](https://github.com/nirzor-deb-25/stm32_pwm_led_dimmer) |
| **DMA UART Echo** | UART communication, DMA data transfers and interrupt-driven firmware | [Repository](https://github.com/nirzor-deb-25/stm32_dma_uart_echo) |
| **UART Firmware Bootloader** | Firmware transfer over UART, flash programming and application startup | [Repository](https://github.com/nirzor-deb-25/stm32_uart_bootloader) |
| **Arduino Projects — Wokwi Simulations** | Arduino-based exercises with sensors, motors, displays and simulated circuits | [Repository](https://github.com/nirzor-deb-25/Arduino-Projects-) |

### 03 — Drivers, debugging & real-time systems

| Project | Focus | Source |
| --- | --- | --- |
| **SPI LIS3DSH Sensor Driver** | SPI peripheral communication and accelerometer interfacing | [Repository](https://github.com/nirzor-deb-25/stm32_spi_lis3dsh) |
| **Cortex-M4 HardFault Debugging** | Fault registers, exception context, GDB/SWD and root-cause analysis | [Repository](https://github.com/nirzor-deb-25/stm32_hardfault_debug) |
| **FreeRTOS Sensor System** | Task scheduling, sensor acquisition and real-time multitasking | [Repository](https://github.com/nirzor-deb-25/stm32_freertos_sensor_system) |

### 04 — IoT & connected systems

| Project | Focus | Source |
| --- | --- | --- |
| **NFC-Based Attendance System** | NFC identification, embedded connectivity and attendance recording workflow | [Repository](https://github.com/nirzor-deb-25/NFC-BASED-ATTENDANCE-SYSTEM) |
| **TwinTrust — IoT Data Quality & Digital Twins** | Sensor-data validation and quality monitoring in an educational IoT prototype | [Repository](https://github.com/nirzor-deb-25/twintrust-project) |

### 05 — Embedded machine learning & intelligent power systems

| Project | Focus | Source |
| --- | --- | --- |
| **STM32 MotionSense** | Accelerometer-based motion classification and on-device ML exploration | [Repository](https://github.com/nirzor-deb-25/stm32-motionsense) |
| **STM32 MachineGuard Lite** | Vibration analysis and anomaly-detection exploration | [Repository](https://github.com/nirzor-deb-25/stm32-machineguard-lite) |
| **STM32 ThermalPredict** | BME280 temperature measurements and predictive modeling | [Repository](https://github.com/nirzor-deb-25/stm32-thermalpredict) |
| **BoostConverterML** | ML-based analysis using simulated boost-converter data; not a validated physical closed-loop controller | [Repository](https://github.com/nirzor-deb-25/BoostConverterML) |
| **STM32-EV-Climbing-Power-ML** | Experimental EV climbing-power estimation using synthetic acceleration inputs | [Repository](https://github.com/nirzor-deb-25/STM32-EV-Climbing-Power-ML) |

**Total: 16 curated projects.** Project maturity, hardware verification and test coverage vary; consult each repository for the available evidence.

## Technical areas

- **Languages and fundamentals:** C, embedded C, introductory C++, bitwise operations, memory management and Make-based builds.
- **Microcontrollers:** STM32F407 / ARM Cortex-M4, peripheral registers, clocks, GPIO, timers, UART, SPI, DMA and interrupts.
- **Real-time firmware:** FreeRTOS, task scheduling, synchronization and embedded sensor workflows.
- **Debugging and tools:** STM32CubeIDE, GCC, GDB, ST-LINK/SWD, Git and GitHub.
- **IoT and experimentation:** ESP32/Arduino-related work, NFC, sensor-data handling, Wokwi simulation and introductory embedded ML.

The list reflects the subject areas represented by the portfolio. It is **not** a claim of expert proficiency in every technology.

## Website experience

The portfolio is a lightweight, multi-page **HTML, CSS and JavaScript** site designed for GitHub Pages. It includes:

- An interactive **CSS 3D STM32 Discovery-inspired board** with rotation and hardware visualization modes.
- Animated technical illustrations for selected projects, including IoT and embedded ML workflows.
- A searchable-by-category project browsing experience with filters and project detail dialogs.
- Dedicated **Home**, **Projects**, **About**, **Toolkit**, **Learning** and **Contact** pages.
- Responsive layouts, accessible navigation, reduced-motion support and motion controls.
- Direct links to project source repositories and professional profiles.

The 3D board and diagrams are conceptual website graphics — **not CAD models, real-time telemetry or validated measurements**.

## Repository structure

```text
nirzor-deb-25.github.io/
├── index.html                  # Home and interactive hardware showcase
├── projects.html               # Project gallery and category filters
├── about.html                  # Background and interests
├── toolkit.html                # Technical tools and hardware
├── learning.html               # Learning focus and development goals
├── contact.html                # Contact and profile links
├── styles.css                  # Theme, layout, responsive styles and 3D visuals
├── app.js                      # Project records, filtering and site interactions
├── hardware.js                 # Interactive hardware presentation
├── nirzor.jpg                  # Portrait image
├── nirzor-portrait-3d.png      # Stylized portrait asset
├── favicon.svg                 # Site icon
├── .nojekyll                   # Disable Jekyll processing on GitHub Pages
└── README.md                   # Project overview and setup guide
```

## Run locally

No npm installation, build process, API key or backend is required.

1. Download or clone the repository:
   ```bash
   git clone https://github.com/nirzor-deb-25/nirzor-deb-25.github.io.git
   cd nirzor-deb-25.github.io
   ```
2. Open `index.html` in your browser, **or** start a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open [http://localhost:8000](http://localhost:8000).

Keep all HTML, JavaScript, CSS and image assets together in the repository root as structured above.

## Publish with GitHub Pages

1. Upload the website files to the **root** of the `nirzor-deb-25.github.io` repository (not as a ZIP file or nested directory).
2. Commit them to your publishing branch, normally `main`.
3. Open **Settings → Pages** in GitHub.
4. Select **Deploy from a branch**, then choose **main** and **/(root)**.
5. Save the settings and check the Pages deployment status.
6. When deployment succeeds, visit **https://nirzor-deb-25.github.io/**.

Reference: [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Maintain and update the portfolio

| What you want to update | File |
| --- | --- |
| Project title, category, tags, description or GitHub link | `app.js` — `projects` and `projectGroups` |
| Homepage introduction and featured sections | `index.html` |
| Project listing layout and initial counts | `projects.html` |
| Background, tools, learning goals or contact details | `about.html`, `toolkit.html`, `learning.html`, `contact.html` |
| Color palette, animation, page layout and responsive design | `styles.css` |
| 3D hardware interactions | `hardware.js` |
| Portrait assets | `nirzor.jpg`, `nirzor-portrait-3d.png` |

When changing the project inventory, check the project count shown on the homepage and project listing. Ensure every portfolio link points to the intended repository and each description matches the available code or documentation.

## Engineering integrity & current limitations

- The portfolio represents **learning and project work**, with different levels of implementation and validation across projects.
- AI-assisted development may have been used in project planning or implementation. Source comprehension, independent debugging and reproducible testing remain important development goals.
- The BoostConverterML and EV climbing-power studies use simulated or synthetic data; they are **not presented as field-validated industrial controllers**.
- TwinTrust is an educational sensor-data quality prototype, **not a certified industrial safety product**.
- Website animations visualize concepts and do not establish physical-system performance.
- The website does not require a backend or collect messages through a hosted form; contact links open external destinations or the visitor's email application.

## Contact & opportunities

I welcome conversations about **embedded software, firmware development, IoT, industrial electronics, internships and bachelor's thesis collaboration**.

- **Portfolio:** https://nirzor-deb-25.github.io/
- **GitHub:** https://github.com/nirzor-deb-25
- **LinkedIn:** https://www.linkedin.com/in/nirzor-deb-opi-635846336/

---

**Build. Debug. Understand.** — *Nirzor Deb*
