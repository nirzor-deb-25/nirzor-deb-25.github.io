'use strict';

// Edit these groups and project records to update the portfolio.
const projectGroups = [
  {
    "id": "foundation",
    "name": "Foundation"
  },
  {
    "id": "peripherals",
    "name": "MCU Peripherals"
  },
  {
    "id": "drivers",
    "name": "Drivers & Debugging"
  },
  {
    "id": "rtos",
    "name": "RTOS"
  },
  {
    "id": "protocols",
    "name": "Protocols & IoT"
  },
  {
    "id": "ml",
    "name": "Embedded Machine Learning"
  }
];
const projects = [
  {
    "id": "allocator",
    "name": "Custom Memory Allocator in C",
    "type": "foundation",
    "label": "C / MEMORY MANAGEMENT",
    "repo": "embedded-c-memory-allocator-",
    "tags": [
      "C",
      "Memory pools",
      "Testing"
    ],
    "description": "Three progressively developed memory allocators: fixed pools, a split/coalesce heap, and a hardened implementation.",
    "focus": [
      "Fixed-size memory-pool allocation.",
      "General-purpose heap with block splitting and coalescing.",
      "A hardened version with calloc/realloc, thread safety, and corruption detection, supported by tests and benchmarks."
    ],
    "explore": "Explore the allocator versions, memory-bug demos, and test/benchmark code.",
    "visual": "memory"
  },
  {
    "id": "register-led",
    "name": "Register-Level LED & Button Control",
    "type": "foundation",
    "label": "BARE-METAL FOUNDATIONS",
    "repo": "stm32_register_led_button",
    "tags": [
      "STM32F407",
      "Registers",
      "GPIO"
    ],
    "description": "LED patterns and button input on STM32F407 using direct register access, without HAL.",
    "focus": [
      "Register-level STM32F407 programming.",
      "Button debouncing, single/double clicks, and long-press detection.",
      "LED patterns implemented without HAL."
    ],
    "visual": "gpio",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "makefile",
    "name": "Makefile-Based C Build System",
    "type": "foundation",
    "label": "FIRMWARE / BUILD SYSTEMS",
    "repo": "stm32_makefile_project",
    "tags": [
      "Make",
      "GCC",
      "Embedded C"
    ],
    "description": "A multi-file STM32 C project with a handwritten Makefile, incremental builds, and command-line flashing.",
    "focus": [
      "A multi-file embedded C codebase.",
      "A handwritten Makefile with incremental builds.",
      "Command-line firmware flashing."
    ],
    "explore": "Explore the build structure and documented command-line workflow.",
    "visual": "build"
  },
  {
    "id": "pwm",
    "name": "PWM LED Dimmer",
    "type": "peripherals",
    "label": "TIMERS / PWM",
    "repo": "stm32_pwm_led_dimmer",
    "tags": [
      "STM32",
      "PWM",
      "Timers"
    ],
    "description": "A PWM-based LED dimmer project on STM32.",
    "focus": [
      "An STM32 project focused on PWM LED brightness control.",
      "Part of my hands-on microcontroller-peripheral portfolio."
    ],
    "visual": "pwm",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "dma",
    "name": "DMA UART Echo",
    "type": "peripherals",
    "label": "DMA / UART",
    "repo": "stm32_dma_uart_echo",
    "tags": [
      "STM32",
      "DMA",
      "UART"
    ],
    "description": "A UART echo project exploring DMA-based data transfer on STM32.",
    "focus": [
      "UART receive/transmit using DMA.",
      "A practical exploration of microcontroller data-transfer peripherals."
    ],
    "visual": "uart",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "uart-bootloader",
    "name": "UART Firmware Bootloader",
    "type": "peripherals",
    "label": "FIRMWARE UPDATES",
    "repo": "stm32_uart_bootloader",
    "tags": [
      "STM32",
      "UART",
      "Bootloader"
    ],
    "description": "A custom STM32 bootloader project for firmware updates over UART.",
    "focus": [
      "Firmware updates over a UART interface.",
      "Part of my exploration of bootloaders and embedded firmware."
    ],
    "visual": "boot",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "smart-led",
    "name": "Smart LED Controller",
    "type": "peripherals",
    "label": "GPIO / PWM / FIRMWARE",
    "repo": "stm32_smart_led_controller",
    "tags": [
      "STM32",
      "PWM",
      "Button input"
    ],
    "description": "An STM32 LED-controller project combining button input, PWM brightness, and bootloader-flashable firmware.",
    "focus": [
      "Button-controlled LED operation.",
      "PWM brightness control.",
      "Firmware designed for the bootloader workflow."
    ],
    "visual": "gpio",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "spi",
    "name": "SPI LIS3DSH Sensor Driver",
    "type": "drivers",
    "label": "SPI / SENSOR DRIVER",
    "repo": "stm32_spi_lis3dsh",
    "tags": [
      "STM32",
      "SPI",
      "LIS3DSH"
    ],
    "description": "An STM32 project exploring SPI communication with a LIS3DSH accelerometer.",
    "focus": [
      "SPI sensor interfacing on STM32.",
      "A practical sensor-driver project in my embedded learning path."
    ],
    "visual": "hub",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "hardfault",
    "name": "Cortex-M4 HardFault Debugging",
    "type": "drivers",
    "label": "CORTEX-M4 / DEBUGGING",
    "repo": "stm32_hardfault_debug",
    "tags": [
      "GDB",
      "SWD",
      "Cortex-M4"
    ],
    "description": "Investigating an STM32 fault through captured exception context, GDB/SWD, and an alignment-safe fix.",
    "focus": [
      "Cortex-M4 HardFault investigation.",
      "Captured exception context and GDB/SWD debugging.",
      "A documented alignment-safe fix and verification."
    ],
    "explore": "Explore the fault investigation and the reasoning behind the fix.",
    "visual": "debug"
  },
  {
    "id": "bootloader",
    "name": "Ground-Up STM32 Bootloader",
    "type": "drivers",
    "label": "FIRMWARE / BOOTLOADERS",
    "repo": "stm32_groundup_bootloader",
    "tags": [
      "C",
      "Bootloader",
      "STM32"
    ],
    "description": "A ground-up STM32 bootloader project, extending my exploration of firmware startup and update mechanisms.",
    "focus": [
      "A ground-up bootloader project for STM32.",
      "Part of my firmware-development learning path.",
      "Related work includes a separate UART bootloader repository."
    ],
    "explore": "Explore the implementation, startup behavior, and repository documentation.",
    "visual": "boot"
  },
  {
    "id": "freertos",
    "name": "FreeRTOS Sensor System",
    "type": "rtos",
    "label": "REAL-TIME FIRMWARE",
    "repo": "stm32_freertos_sensor_system",
    "tags": [
      "FreeRTOS",
      "STM32",
      "Sensors"
    ],
    "description": "A sensor-system project exploring FreeRTOS on STM32 and the structure of multitask embedded applications.",
    "focus": [
      "A FreeRTOS-based sensor-system project on STM32.",
      "A practical exploration of real-time embedded software.",
      "Part of my portfolio of sensor and scheduling projects."
    ],
    "explore": "Explore the firmware and project documentation for implementation details.",
    "visual": "rtos"
  },
  {
    "id": "producer-consumer",
    "name": "FreeRTOS Producer–Consumer",
    "type": "rtos",
    "label": "TASK COMMUNICATION",
    "repo": "stm32_freertos_producer_consumer",
    "tags": [
      "STM32",
      "FreeRTOS",
      "Queues"
    ],
    "description": "A FreeRTOS producer–consumer project exploring communication between tasks on STM32.",
    "focus": [
      "Producer–consumer task communication.",
      "A FreeRTOS project alongside my sensor-system and scheduler work."
    ],
    "visual": "rtos",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "scheduler",
    "name": "Cooperative Scheduler",
    "type": "rtos",
    "label": "COOPERATIVE SCHEDULING",
    "repo": "stm32_cooperative_scheduler",
    "tags": [
      "STM32",
      "Scheduling",
      "Firmware"
    ],
    "description": "A cooperative-scheduler project exploring how embedded tasks can share execution time.",
    "focus": [
      "Cooperative scheduling on STM32.",
      "An exploration of task execution without relying on a full RTOS.",
      "A complement to my FreeRTOS producer-consumer and sensor projects."
    ],
    "explore": "Explore the source and scheduling implementation in the repository.",
    "visual": "rtos"
  },
  {
    "id": "hub",
    "name": "Multi-Protocol Sensor Hub",
    "type": "protocols",
    "label": "SENSOR INTERFACES",
    "repo": "stm32_multiprotocol_sensor_hub",
    "tags": [
      "STM32",
      "Sensor hub",
      "Interfaces"
    ],
    "description": "A sensor-hub project exploring multiple communication interfaces on an STM32 microcontroller.",
    "focus": [
      "STM32 firmware for a multi-protocol sensor hub.",
      "Sensor integration and embedded communication interfaces.",
      "A practical project connecting peripheral work into a system."
    ],
    "explore": "Explore the repository for the interface implementation and hardware details.",
    "visual": "hub"
  },
  {
    "id": "motionsense",
    "name": "STM32 MotionSense",
    "type": "ml",
    "label": "EMBEDDED ML",
    "repo": "stm32-motionsense",
    "tags": [
      "STM32",
      "Embedded C",
      "Python"
    ],
    "description": "From sensor motion to on-device classification. A bare-metal project connecting Python training with embedded deployment.",
    "focus": [
      "Bare-metal STM32 motion classification.",
      "Python model training and deployment verification.",
      "A workflow connecting sensor input, model development, and inference on the device."
    ],
    "explore": "Explore the model workflow, firmware structure, and deployment notes in the repository.",
    "visual": "motion"
  },
  {
    "id": "machineguard",
    "name": "STM32 MachineGuard Lite",
    "type": "ml",
    "label": "STM32 / MACHINEGUARD",
    "repo": "stm32-machineguard-lite",
    "tags": [
      "STM32",
      "C",
      "MachineGuard"
    ],
    "description": "A further STM32 project in my embedded-systems portfolio.",
    "focus": [
      "A public STM32 repository included alongside my sensor and embedded-ML projects.",
      "See the repository for its implementation and technical scope."
    ],
    "visual": "motion",
    "explore": "Explore the source code and project documentation on GitHub."
  },
  {
    "id": "thermalpredict",
    "name": "STM32 ThermalPredict",
    "type": "ml",
    "label": "SENSOR INTELLIGENCE",
    "repo": "stm32-thermalpredict",
    "tags": [
      "BME280",
      "Ridge regression",
      "STM32"
    ],
    "description": "Temperature forecasting on STM32 using BME280 measurements, ridge regression, and on-device verification.",
    "focus": [
      "Temperature measurements using a BME280 sensor.",
      "Ridge-regression temperature forecasting.",
      "On-device verification of embedded deployment."
    ],
    "explore": "Explore the sensor-to-model workflow and verification documentation.",
    "visual": "thermal"
  }
];

const svgStart='<svg viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g stroke="#5b8051" stroke-width=".6" opacity=".35"><path d="M0 45h360M0 80h360M0 115h360M0 150h360M40 0v195M90 0v195M140 0v195M190 0v195M240 0v195M290 0v195M340 0v195"/></g>';
// Isometric vector scenes for the three Foundation project topics.
function foundationVisual(kind){
  if(!['memory','gpio','build'].includes(kind))return null;
  const txt=(x,y,t,size=8,c='#b9d5a1')=>`<text x="${x}" y="${y}" font-family="ui-monospace,monospace" font-size="${size}" fill="${c}">${t}</text>`;
  const cube=(x,y,w=31,h=24,d=13,c='#8ab956')=>`<g transform="translate(${x} ${y})"><path d="M0 0l${d} -${d*.55}h${w}l-${d} ${d*.55}z" fill="${c}" stroke="#d5edb088" stroke-width=".6"/><path d="M0 0h${w}v${h}H0z" fill="#2e5235" stroke="#97c56c" stroke-width=".6"/><path d="M${w} 0l${d} -${d*.55}v${h}l-${d} ${d*.55}z" fill="#507b44" stroke="#9ac273" stroke-width=".6"/></g>`;
  const frame=(body)=>`<svg class="foundation-3d f3-${kind}" viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${kind==='memory'?'Animated 3D memory blocks illustrating allocation and freeing':kind==='gpio'?'Animated 3D button, STM32 register and LED circuit':'Animated 3D C source files compiling and linking into firmware'}"><path d="M20 145L181 65l160 65-160 56z" fill="#9ed56606" stroke="#99c65b20"/><g stroke="#8fb35510" stroke-width=".7"><path d="M42 145l139-69 139 56M65 157l140-69M89 168l140-69M114 177l138-69M20 130h321"/></g>${body}</svg>`;
  let b='';
  if(kind==='memory'){
    b+=txt(25,40,'malloc(32)',10,'#d4ff70')+txt(251,40,'free(ptr)',10,'#90b7d0');
    b+='<path d="M87 47v15l39 17M278 47v16l-18 16" fill="none" stroke="#a7d46966" stroke-width="1" stroke-dasharray="3 4"/><ellipse cx="183" cy="151" rx="130" ry="17" fill="#0005"/>';
    b+='<g class="f3-hover"><path d="M36 112l30-19h245l-28 19v41H36z" fill="#162c1d" stroke="#78a354"/><path d="M36 112h247v41H36z" fill="#1c3522" stroke="#617e4e"/>';
    for(let i=0;i<7;i++)b+=`<g class="f3-memory-cell cell-${i}" style="--i:${i}">${cube(48+i*32,101,25,29,11,i===0||i===4?'#d4ff70':'#739957')}<path class="f3-allocated" d="M${48+i*32} 102h25v27h-25z" fill="#c9f67d"/><path d="M${53+i*32} 135v8m6-8v8m6-8v8" stroke="#c8b479" stroke-width="2"/></g>`;
    b+=txt(47,151,'HEAP / MEMORY POOL',6)+'<g class="f3-memory-pointer"><path d="M162 61v15m-5-5 5 6 5-6" fill="none" stroke="#e0ff9e" stroke-width="2"/>'+txt(144,56,'ptr',8,'#d4ff70')+'</g></g>';
    b+=txt(37,177,'ALLOCATE',7,'#d4ff70')+txt(143,177,'SPLIT',7)+txt(235,177,'COALESCE',7);
  }else if(kind==='gpio'){
    b+='<ellipse cx="185" cy="149" rx="124" ry="20" fill="#0005"/><g class="f3-hover"><path d="M39 112l108-54 177 63-111 56z" fill="#0d2619" stroke="#64975a"/><path d="M39 106l108-54 177 63-111 56z" fill="#285c3b" stroke="#88b76b"/><path d="M39 106v6l174 65v-6M324 115v6l-111 56" fill="none" stroke="#597944"/>';
    b+='<g fill="none" stroke="#a4ca7566" stroke-width="1"><path d="M96 119l54-28 42 15 55-29M99 125l56-28 38 15 58-29M100 131l57-28 40 15 55-29"/></g><path class="f3-signal" d="M95 121l57-28 43 16 57-29" fill="none" stroke="#d9ff8b" stroke-width="2"/>';
    b+='<g transform="translate(151 77)"><path d="M-5 19l34-18 48 17-35 18z" fill="#111e16" stroke="#aebd8b"/><path d="M-5 19v9l47 18v-10M42 36l35-18v9L42 46" fill="#0a160e" stroke="#536a45"/>'+txt(19,19,'STM32',8,'#cfe5bb')+'</g>';
    for(let i=0;i<7;i++)b+=`<path d="M${142+i*6} ${96+i*2.2}l-8 4m${17+i*1.4} -${34+i*.2}l7-4" stroke="#b6c89a" stroke-width="1.6"/>`;
    b+='<g class="f3-button-press"><path d="M71 117l19-11 23 9-19 11z" fill="#acbba0" stroke="#d7dfc5"/><path d="M71 117v8l23 10v-9M94 126l19-11v8l-19 12" fill="#647a5b" stroke="#8eaa7b"/><ellipse cx="92" cy="115" rx="9" ry="5" fill="#278caf" stroke="#99dbed"/></g>';
    b+='<g class="f3-led-lit"><path d="M253 83v23m10-27v24" stroke="#c0c8a2" stroke-width="2"/><ellipse class="f3-led-halo" cx="258" cy="77" rx="29" ry="20" fill="#d2ff7044"/><path d="M246 79V67q12-23 24-2v14q-11 13-24 0z" fill="#a0d75b" stroke="#dfff99"/><ellipse cx="258" cy="78" rx="12" ry="6" fill="#98d951"/><ellipse cx="253" cy="65" rx="3" ry="5" fill="#f1ffd0aa"/></g>';
    b+=txt(65,144,'BUTTON',7)+txt(154,145,'GPIO → ODR',7)+txt(281,84,'LED',7,'#d4ff70')+'</g>';
    b+='<g class="f3-register"><rect x="125" y="31" width="106" height="20" rx="3" fill="#15291e" stroke="#7a9e57"/>'+txt(133,44,'ODR  0000 0001',8,'#d4ff70')+'</g>'+txt(67,180,'INPUT → REGISTER → OUTPUT',8);
  }else{
    b+='<ellipse cx="182" cy="147" rx="140" ry="20" fill="#0005"/><path d="M80 96h43m52 0h43m52 0h35" stroke="#6d984c" fill="none"/><path class="f3-build-flow" d="M80 96h43m52 0h43m52 0h35" stroke="#d6ff88" stroke-width="2" stroke-dasharray="5 15" fill="none"/>';
    b+='<g class="f3-source-stack">';
    for(let i=2;i>=0;i--)b+=`<g transform="translate(${30+i*8} ${65-i*8})"><path d="M0 5l12-7h40v53l-12 7H0z" fill="#213e2a" stroke="#89b869"/><path d="M0 5h40v53H0z" fill="#294e32" stroke="#9fc976"/>${txt(7,24,['main.c','gpio.c','app.c'][i],7,'#ddf8bd')}<path d="M7 33h24m-24 6h17m-17 6h23" stroke="#7eaa68" stroke-width="1"/></g>`;
    b+='</g><g class="f3-compiler">'+cube(127,74,42,40,14,'#8ab85d')+txt(132,98,'GCC',10,'#d9f6bc')+'<g class="f3-gear"><path d="M150 60v-4m0 27v-4m-11-9h-4m30 0h-4m-19-8-3-3m23 23-3-3m-18 0-3 3m23-23-3 3" stroke="#ddf4ab" stroke-width="3"/><circle cx="150" cy="70" r="8" fill="#193721" stroke="#d4ff70"/><circle cx="150" cy="70" r="3" fill="#b9e779"/></g></g>';
    b+='<g class="f3-object-files">'+cube(214,83,23,27,9,'#8ac6b3')+txt(217,101,'.o',8,'#d9ffec')+'</g><g class="f3-firmware">'+cube(288,73,42,41,12,'#b8db75')+txt(291,95,'.elf',8,'#e5ffc1')+txt(291,107,'.bin',8,'#c2e19a')+'</g>';
    b+=txt(30,146,'C SOURCES',7)+txt(123,146,'COMPILE',7)+txt(210,146,'LINK',7)+txt(287,146,'FIRMWARE',7);
    b+='<rect x="122" y="27" width="111" height="20" rx="3" fill="#15291e" stroke="#729651"/>'+txt(131,40,'$ make → flash',8,'#d4ff70')+txt(58,177,'SOURCES → OBJECTS → IMAGE',8);
  }
  return frame(b);
}

// Topic-specific, lightweight animated vector illustrations for MCU peripherals.
function peripheralVisual(kind){
  const text=(x,y,t,size=8,color='#b9d5a1')=>`<text x="${x}" y="${y}" font-family="ui-monospace,monospace" font-size="${size}" fill="${color}">${t}</text>`;
  const solid=(x,y,w,h,d=12,top='#8bbf64',name='')=>`<g transform="translate(${x} ${y})"><path d="M0 0l${d} -${d*.6}h${w}l-${d} ${d*.6}z" fill="${top}" stroke="#c8e8a877"/><path d="M0 0h${w}v${h}H0z" fill="#294a31" stroke="#90b56d" stroke-width=".7"/><path d="M${w} 0l${d} -${d*.6}v${h}l-${d} ${d*.6}z" fill="#456c3d" stroke="#90b56d" stroke-width=".7"/>${name?text(5,h/2+3,name,8,'#e2f8c8'):''}</g>`;
  const chip=(x,y,name)=>`<g transform="translate(${x} ${y})">${Array.from({length:6},(_,i)=>`<path d="M${4+i*7} -3v-5m0 43v7M-3 ${2+i*5}h-6m58 0h7" stroke="#abbf96" stroke-width="2"/>`).join('')}${solid(0,0,43,34,10,'#344a34',name)}</g>`;
  const led=(x,y,cls,color='#c8ff70')=>`<g class="${cls}" transform="translate(${x} ${y})"><path d="M-5 4v19m10-21v18" stroke="#b5bf9c" stroke-width="2"/><ellipse class="p3-led-halo" cx="0" cy="-8" rx="24" ry="20" fill="${color}" opacity=".18"/><path class="p3-led-dome" d="M-10 0v-14q10-18 20 0V0q-10 10-20 0z" fill="${color}" stroke="#e5ffd1"/><ellipse cx="-4" cy="-15" rx="2" ry="4" fill="#fff9"/></g>`;
  const wire=(path,cls='')=>`<path d="${path}" fill="none" stroke="#7eaa6666" stroke-width="1.2"/><path class="p3-data ${cls}" d="${path}" fill="none" stroke="#dcff9e" stroke-width="2" stroke-dasharray="5 40"/>`;
  let b='',label='';
  const floor='<ellipse cx="184" cy="145" rx="134" ry="19" fill="#0005"/><path d="M22 142l157-72 160 61-154 53z" fill="#9ed56605" stroke="#99c65b20"/>';
  if(kind==='pwm'){
    label='Animated 3D timer, PWM waveform and LED brightness';
    b+=text(25,40,'TIMER / PWM',9,'#d4ff70')+'<g class="p3-wave-float"><rect x="127" y="26" width="199" height="36" rx="3" fill="#13281c" stroke="#6c9652"/><path class="p3-wave" d="M138 51v-16h26v16h18V35h26v16h18V35h26v16h18V35h26v16h18" fill="none" stroke="#d4ff70" stroke-width="1.6"/>'+text(139,70,'DUTY CYCLE → BRIGHTNESS',6)+'</g>';
    b+='<g class="p3-float"><path d="M47 125l69-36 116 38-69 37z" fill="#245837" stroke="#8cb96e"/><path d="M47 125v6l116 39 69-37v-6" fill="none" stroke="#466f41"/>'+chip(106,110,'TIM')+wire('M153 127h54l44-25')+led(272,103,'p3-pwm-led')+text(91,157,'STM32 TIMER',7)+text(256,140,'LED',8,'#d4ff70')+'</g>';
    b+='<rect x="251" y="149" width="52" height="5" fill="#28472e" stroke="#738f53"/><rect class="p3-duty-bar" x="251" y="149" width="52" height="5" fill="#d4ff70"/>'+text(42,180,'TIMER → PULSE WIDTH → LED OUTPUT',8);
  }else if(kind==='uart'){
    label='Animated 3D UART receive, DMA memory transfer and UART echo';
    b+='<g class="p3-cpu-label"><rect x="131" y="28" width="110" height="22" rx="3" fill="#15291c" stroke="#6d9452"/>'+text(142,43,'CPU / AVAILABLE',8,'#d4ff70')+'</g>';
    b+=wire('M81 106h54m53 0h57','p3-packet-out')+wire('M269 137H68','p3-packet-back');
    b+='<g class="p3-float">'+solid(30,88,51,40,12,'#6e9b82','RX')+chip(139,89,'DMA')+solid(247,88,57,40,12,'#6e9b82','TX')+text(25,149,'UART RX',7)+text(144,149,'TRANSFER',7)+text(248,149,'UART TX',7)+'</g>';
    b+='<g class="p3-buffer">';for(let i=0;i<6;i++)b+=`<rect class="p3-buffer-byte" style="--byte:${i}" x="${137+i*8}" y="61" width="6" height="9" fill="#b9ee74" stroke="#d6f4b2" stroke-width=".5"/>`;b+='</g>'+text(134,56,'MEMORY BUFFER',6)+text(73,180,'RECEIVE → DMA → ECHO',8);
  }else if(kind==='boot'){
    label='Animated 3D firmware image transferring over UART into application flash';
    b+='<g class="p3-float"><path d="M26 63h75v64H26z" fill="#29472e" stroke="#a0c57c"/><path d="M32 69h63v48H32z" fill="#101f16" stroke="#546c41"/>'+text(40,86,'firmware',7,'#d4ff70')+text(44,100,'.bin',10,'#d4ff70')+'<path d="M26 127h75l15 16H14z" fill="#788f66" stroke="#bbd69b"/><path d="M40 132h44" stroke="#1e3b23" stroke-width="4"/></g>'+wire('M111 108h63l26-21')+text(119,100,'UART',8,'#d4ff70');
    b+='<g class="p3-flash-device">'+solid(207,64,99,83,15,'#5c8451')+'<rect x="216" y="73" width="79" height="17" fill="#415b39" stroke="#b0c883"/>'+text(223,85,'BOOTLOADER',7,'#def1bd')+'<path d="M280 76v-3a4 4 0 018 0v3m-9 0h10v8h-10z" fill="none" stroke="#d4ff70" stroke-width="1"/>';
    for(let i=0;i<4;i++)b+=`<rect x="216" y="${95+i*10}" width="79" height="7" fill="#18301e" stroke="#658a50" stroke-width=".5"/><rect class="p3-flash-row" style="--row:${i}" x="216" y="${95+i*10}" width="79" height="7" fill="#b5e579"/>`;
    b+=text(225,143,'APPLICATION',6)+'</g>'+text(226,48,'FLASH MEMORY',8,'#d4ff70')+text(42,180,'TRANSFER → PROGRAM → START APP',8);
  }else{
    label='Animated 3D smart LED controller combining button input, PWM and firmware';
    b+='<g class="p3-float"><path d="M39 112l108-52 172 60-110 55z" fill="#173e27" stroke="#9cc576"/><path d="M39 112v7l170 63 110-55v-7" fill="none" stroke="#567d45"/>'+chip(148,103,'STM32')+wire('M97 124l53-27 46 16 40-24')+'<g class="p3-smart-button"><path d="M75 122l18-10 25 8-19 11z" fill="#c2cfaf" stroke="#e7f3cd"/><path d="M75 122v8l24 10v-9l19-11v8l-19 12" fill="#7d9270"/><ellipse cx="97" cy="120" rx="8" ry="5" fill="#2a9cb7"/></g>'+led(236,90,'p3-smart-led led-a','#d4ff70')+led(269,101,'p3-smart-led led-b','#79c7e9')+led(301,113,'p3-smart-led led-c','#ffc875')+text(72,150,'BUTTON',7)+text(157,157,'PWM',7)+'</g>';
    b+='<g class="p3-smart-modes"><rect x="124" y="28" width="153" height="23" rx="3" fill="#13281b" stroke="#8ab264"/>'+text(133,43,'INPUT / PWM / FIRMWARE',8,'#d4ff70')+'</g><g class="p3-update-icon"><path d="M47 55h27v30H47z" fill="#1f3c27" stroke="#95b56a"/>'+text(51,67,'.bin',6)+'<path d="M60 73v7m-3-3 3 3 3-3" fill="none" stroke="#d4ff70"/></g>'+text(46,180,'BUTTON → BRIGHTNESS → LED PATTERNS',8);
  }
  return `<svg class="peripheral-3d p3-${kind}" viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${floor}${b}</svg>`;
}

// Isometric animated illustrations for Drivers & Debugging cards.
function driverVisual(kind){
  const text=(x,y,t,size=8,color='#b9d5a1')=>`<text x="${x}" y="${y}" font-family="ui-monospace,monospace" font-size="${size}" fill="${color}">${t}</text>`;
  const block=(x,y,w,h,label='',top='#729e54')=>`<g transform="translate(${x} ${y})"><path d="M0 0l12-8h${w}l-12 8z" fill="${top}" stroke="#b8dc9977"/><path d="M0 0h${w}v${h}H0z" fill="#26462f" stroke="#82ab60"/><path d="M${w} 0l12-8v${h}l-12 8z" fill="#456f40" stroke="#82ab60"/>${label?text(6,h/2+3,label,8,'#ddf6c5'):''}</g>`;
  const chip=(x,y,name)=>`<g transform="translate(${x} ${y})">${Array.from({length:7},(_,i)=>`<path d="M${5+i*7} -2v-5m0 46v5M-2 ${3+i*5}h-5m62 0h5" stroke="#b7c89f" stroke-width="1.6"/>`).join('')}${block(0,0,53,38,name,'#435f40')}</g>`;
  const wire=(d,cls='',color='#d4ff70')=>`<path d="${d}" stroke="#78985a66" fill="none"/><path class="d3-flow ${cls}" d="${d}" fill="none" stroke="${color}" stroke-width="1.6" stroke-dasharray="4 33"/>`;
  let b='',desc='';
  const floor='<ellipse cx="185" cy="149" rx="135" ry="17" fill="#0005"/><path d="M22 145l156-74 160 61-154 53z" fill="#9ed56605" stroke="#99c65b20"/>';
  if(kind==='hub'){
    desc='Animated 3D STM32 and LIS3DSH accelerometer with SPI clock and data signals';
    b+='<g class="d3-float"><path d="M28 108l49-23 69 24-49 25z" fill="#235c39" stroke="#83b66a"/>'+chip(55,94,'STM32')+text(41,150,'CONTROLLER',7)+'</g>';
    ['CS','SCK','MOSI','MISO'].forEach((name,i)=>{b+=wire(`M124 ${87+i*12}H229`,i===3?'d3-return':'',i===3?'#86c9e1':'#d4ff70')+text(164,83+i*12,name,6,i===3?'#9ad5e6':'#bfd9a2');});
    b+='<g class="d3-sensor-sway"><path d="M227 90l45-23 57 21-45 24z" fill="#2a5d3d" stroke="#94bc72"/><path d="M227 90v23l57 22v-23l45-24v23l-45 24" fill="#173722" stroke="#6b9656"/>'+block(249,78,38,24,'MEMS','#58794a')+text(239,145,'LIS3DSH',9,'#d4ff70')+'</g>';
    b+='<g class="d3-axis"><path d="M275 54V28m0 26 25 10m-25-10-24 10" fill="none" stroke="#a7d87b" stroke-width="1.3"/>'+text(270,24,'Z',6)+text(305,68,'X',6)+text(242,70,'Y',6)+'<circle class="d3-sensor-dot" cx="275" cy="54" r="4" fill="#d4ff70"/></g>';
    b+=text(28,40,'4-WIRE SPI / SENSOR DRIVER',9,'#d4ff70')+text(48,180,'CLOCK → REGISTER READ → XYZ DATA',8);
  }else if(kind==='debug'){
    desc='Animated 3D Cortex-M4 fault, captured register stack and GDB inspection';
    b+='<g class="d3-float"><path d="M24 117l52-26 72 25-52 27z" fill="#225434" stroke="#87b468"/>'+chip(52,104,'M4')+'<circle class="d3-fault-halo" cx="78" cy="115" r="25" fill="#ff8b5b"/><path class="d3-fault-mark" d="M78 75l12 20H66z" fill="#f2aa6b" stroke="#ffe2a0"/>'+text(76,92,'!',10,'#3a281a')+text(37,154,'FAULT CONTEXT',7)+'</g>';
    b+=wire('M118 119l27-15h25','d3-fault-data','#ffbd7b');
    b+='<g class="d3-register-stack">';
    ['R0–R3','LR / PC','xPSR'].forEach((name,i)=>{b+=`<g class="d3-stack-layer" style="--layer:${i}">${block(159,119-i*22,63,15,name,i===2?'#b4d378':'#74975c')}</g>`;});b+='</g>';
    b+=wire('M227 103h20l15-15','d3-inspect-data');
    b+='<g class="d3-debugger"><path d="M254 49h78v75h-78z" fill="#23422b" stroke="#97bc75"/><path d="M260 55h66v60h-66z" fill="#102018" stroke="#5a7948"/>'+text(266,70,'(gdb)',9,'#d4ff70')+text(265,84,'backtrace',6)+text(265,96,'inspect PC',6)+'<rect class="d3-debug-line" x="265" y="103" width="50" height="3" fill="#d4ff70"/><path d="M281 125v12h-14m14 0h22" fill="none" stroke="#8fb270" stroke-width="3"/></g>';
    b+='<rect x="129" y="27" width="110" height="20" rx="3" fill="#1c2d21" stroke="#bc9b68"/>'+text(140,40,'GDB / SWD',9,'#d4ff70')+text(34,180,'CAPTURE → INSPECT → VERIFY FIX',8);
  }else{
    desc='Animated 3D reset, bootloader vector table and application startup sequence';
    b+='<g class="d3-reset">'+block(25,85,48,41,'RESET','#8baa70')+'<path d="M40 75a11 11 0 0118-8m0-5v8h-8" fill="none" stroke="#d4ff70" stroke-width="1.5"/>'+text(28,146,'STARTUP',7)+'</g>';
    b+=wire('M86 105h35l19-12')+'<g class="d3-boot-chip">'+block(142,64,76,69,'BOOT','#93b66b')+text(149,94,'VECTOR TABLE',6)+'<path d="M151 103h54m-54 9h45m-45 9h51" stroke="#789e5a" stroke-width="2"/><path class="d3-vector-highlight" d="M151 112h45" stroke="#dbff9f" stroke-width="3"/>'+text(140,150,'BOOTLOADER',7)+'</g>';
    b+=wire('M232 103h24l15-13','d3-app-jump')+'<g class="d3-application">'+block(272,77,53,47,'APP','#a8d66d')+'<circle class="d3-app-light" cx="315" cy="87" r="3" fill="#d4ff70"/>'+text(266,150,'APPLICATION',7)+'</g>';
    b+='<g class="d3-address-card"><rect x="126" y="27" width="128" height="20" rx="3" fill="#13281b" stroke="#82a759"/>'+text(136,40,'STACK → RESET HANDLER',7,'#d4ff70')+'</g>'+text(39,180,'RESET → BOOTLOADER → APPLICATION',8);
  }
  return `<svg class="driver-3d d3-${kind}" viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${desc}">${floor}${b}</svg>`;
}

// Distinct scheduling, queue and interface scenes; activity is illustrative.
function systemProjectVisual(id){
  const text=(x,y,t,size=8,c='#b9d5a1')=>`<text x="${x}" y="${y}" font-family="ui-monospace,monospace" font-size="${size}" fill="${c}">${t}</text>`;
  const box=(x,y,w,h,t='',c='#89b55f')=>`<g transform="translate(${x} ${y})"><path d="M0 0l12-8h${w}l-12 8z" fill="${c}" stroke="#c5e5a477"/><path d="M0 0h${w}v${h}H0z" fill="#274930" stroke="#8fb469"/><path d="M${w} 0l12-8v${h}l-12 8z" fill="#476e3e" stroke="#8fb469"/>${t?text(5,h/2+3,t,8,'#e0f3c8'):''}</g>`;
  const wire=(d,c='#d4ff70',cl='')=>`<path d="${d}" fill="none" stroke="#7b9a5d55"/><path class="s3-data ${cl}" d="${d}" stroke="${c}" fill="none" stroke-width="1.6" stroke-dasharray="4 32"/>`;
  let b='',desc='';
  const floor='<ellipse cx="181" cy="149" rx="137" ry="17" fill="#0005"/><path d="M22 145l157-74 159 61-154 53z" fill="#9ed56605" stroke="#99c65b20"/>';
  if(id==='freertos'){
    desc='Animated 3D sensor inputs feeding a FreeRTOS controller with alternating task layers';
    b+='<g class="s3-sensors">'+box(29,74,43,24,'DATA','#7eaf97')+box(29,116,43,24,'INPUT','#6e9e87')+'</g>'+wire('M84 85h32l23 20')+wire('M84 125h32l23-18','#8bcedc');
    b+='<g class="s3-float">'+box(143,112,91,36,'STM32','#5b8150')+'</g>';
    ['SENSOR','PROCESS','OUTPUT'].forEach((t,i)=>{b+=`<g class="s3-task-layer" style="--task:${i}">${box(149,88-i*22,79,17,t,['#89b65c','#7eb19d','#a4bd63'][i])}<rect class="s3-task-light" style="--task:${i}" x="216" y="${94-i*22}" width="5" height="5" fill="#d4ff70"/></g>`;});
    b+=wire('M246 123h19l19-25')+'<g class="s3-status"><rect x="272" y="70" width="62" height="55" rx="3" fill="#12261a" stroke="#8cab65"/>'+text(280,84,'RTOS',8,'#d4ff70');for(let i=0;i<4;i++)b+=`<rect class="s3-tick" style="--tick:${i}" x="${280+i*11}" y="${110-i%2*9}" width="7" height="${8+i%2*9}" fill="#b3dc77"/>`;b+='</g>'+text(28,40,'MULTITASK SENSOR SYSTEM',9,'#d4ff70')+text(44,180,'READ → PROCESS → RESPOND',8);
  }else if(id==='producer-consumer'){
    desc='Animated 3D producer sending data through a FIFO queue to a consumer';
    b+='<g class="s3-producer">'+box(24,88,59,44,'PRODUCE','#80b991')+text(25,148,'TASK A',7)+'</g><g class="s3-consumer">'+box(269,88,62,44,'CONSUME','#9dc973')+text(276,148,'TASK B',7)+'</g>';
    b+=wire('M95 108h165')+'<path d="M113 106l12-8h123l-12 8v30H113z" fill="#18351f" stroke="#729b52"/><path d="M113 106h123v30H113z" fill="#1f3d27" stroke="#789d58"/>';
    for(let i=0;i<5;i++)b+=`<rect x="${119+i*23}" y="112" width="18" height="17" rx="1" fill="#2d4b32" stroke="#769457"/><g class="s3-queue-slot" style="--slot:${i}">${box(119+i*23,110,16,17,'','#a9d47b')}</g>`;
    b+='<g class="s3-message">'+box(85,81,11,13,'','#caff85')+'</g>'+text(137,88,'FIFO QUEUE',9,'#d4ff70')+text(122,151,'SEND → RECEIVE',7)+'<rect x="121" y="29" width="119" height="21" rx="3" fill="#13271a" stroke="#729651"/>'+text(130,43,'TASK COMMUNICATION',8,'#d4ff70')+text(35,180,'PRODUCER → QUEUE → CONSUMER',8);
  }else if(id==='scheduler'){
    desc='Animated 3D cooperative scheduler showing tasks running and yielding in sequence';
    b+='<g class="s3-scheduler-base">'+box(34,122,283,20,'COOPERATIVE EXECUTION','#497547')+'</g>';
    ['TASK A','TASK B','TASK C'].forEach((t,i)=>{b+=`<g class="s3-coop-task" style="--task:${i}">${box(48+i*94,77,61,29,t,['#afd66f','#78bca5','#a9bc69'][i])}<path d="M${73+i*94} 112v8" stroke="#a7cc78" stroke-width="1.4"/>${text(54+i*94,61,'RUN / YIELD',6)}</g>`;});
    b+=wire('M125 92h14m81 0h14')+'<g class="s3-run-token"><path d="M51 42h44l-6 6H45z" fill="#d4ff70" stroke="#eaffc0"/></g>'+text(62,163,'A → YIELD → B → YIELD → C',7)+'<path class="s3-return" d="M310 154v18H44v-19" fill="none" stroke="#b2d77c" stroke-dasharray="4 6"/>'+text(113,36,'ONE TASK AT A TIME',8,'#d4ff70');
  }else{
    desc='Animated 3D multi-protocol sensor hub with I2C, SPI and UART data paths';
    ['I²C','SPI','UART'].forEach((t,i)=>{b+=`<g class="s3-interface-input" style="--port:${i}">${box(25,55+i*35,51,20,t,['#7fae96','#8db668','#75a8ad'][i])}</g>`+wire(`M88 ${65+i*35}h24l31 ${43-i*35}`,['#a3dfb1','#d4ff70','#8dcee4'][i]);});
    b+='<g class="s3-hub-core"><path d="M130 112l42-24 75 26-44 26z" fill="#1d4b30" stroke="#93b96b"/>'+box(147,92,65,35,'STM32','#547c4b')+text(140,154,'SENSOR HUB',8,'#d4ff70')+'</g>'+wire('M228 110h26l13-17');
    b+='<g class="s3-frame-panel"><path d="M267 57h64v80h-64z" fill="#23452d" stroke="#8ab064"/><path d="M273 63h52v65h-52z" fill="#102318" stroke="#5f854c"/>'+text(279,78,'DATA',8,'#d4ff70');for(let i=0;i<4;i++)b+=`<g class="s3-frame-row" style="--row:${i}"><path d="M279 ${88+i*10}h${34-i%2*10}" stroke="#a9da77" stroke-width="3"/><circle cx="318" cy="${88+i*10}" r="1.5" fill="#c9ff8e"/></g>`;b+='</g>'+text(28,31,'MULTIPLE INTERFACES / ONE CONTROLLER',8,'#d4ff70')+text(37,180,'SENSORS → INTERFACES → DATA FRAMES',8);
  }
  return `<svg class="system-project-3d s3-${id}" viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${desc}">${floor}${b}</svg>`;
}

// Illustrated embedded-ML workflows. Signals and outcomes are simulated.
function mlProjectVisual(id){
  const text=(x,y,t,size=8,c='#b9d5a1')=>`<text x="${x}" y="${y}" font-family="ui-monospace,monospace" font-size="${size}" fill="${c}">${t}</text>`;
  const box=(x,y,w,h,t='',top='#88b95f')=>`<g transform="translate(${x} ${y})"><path d="M0 0l12-8h${w}l-12 8z" fill="${top}" stroke="#c4e6a577"/><path d="M0 0h${w}v${h}H0z" fill="#274930" stroke="#8fb469"/><path d="M${w} 0l12-8v${h}l-12 8z" fill="#476e3e" stroke="#8fb469"/>${t?text(5,h/2+3,t,8,'#e0f3c8'):''}</g>`;
  const model=(x,y,name)=>`<g transform="translate(${x} ${y})">${Array.from({length:7},(_,i)=>`<path d="M${5+i*7} -2v-5m0 46v5M-2 ${3+i*5}h-5m62 0h5" stroke="#b6c99c" stroke-width="1.5"/>`).join('')}${box(0,0,54,38,name,'#4e7648')}</g>`;
  const wire=(d,c='#d4ff70')=>`<path d="${d}" fill="none" stroke="#79985a55"/><path class="m3-data" d="${d}" fill="none" stroke="${c}" stroke-width="1.7" stroke-dasharray="5 35"/>`;
  let b='',desc='';
  const floor='<ellipse cx="182" cy="149" rx="136" ry="17" fill="#0005"/><path d="M22 145l156-74 160 61-154 53z" fill="#9ed56605" stroke="#99c65b20"/>';
  if(id==='motionsense'){
    desc='Animated 3D motion sensor, extracted features and STM32 classification workflow';
    b+='<g class="m3-motion-sensor">'+box(30,95,48,29,'XYZ','#83b696')+'<path d="M54 82V59m0 23 20 8m-20-8-19 8" stroke="#a7d47f" stroke-width="1.3" fill="none"/>'+text(51,55,'Z',6)+text(77,94,'X',6)+text(25,94,'Y',6)+text(29,146,'MOTION',7)+'</g>'+wire('M90 109h34l18-17');
    b+='<g class="m3-feature-plane"><path d="M117 57h66v33h-66z" fill="#172f20" stroke="#799e58"/>';for(let i=0;i<5;i++)b+=`<rect class="m3-feature" style="--f:${i}" x="${124+i*11}" y="${78-i%3*5}" width="6" height="${7+i%3*5}" fill="#b9e984"/>`;b+='</g>'+text(118,50,'FEATURES',7);
    b+='<g class="m3-float">'+model(151,105,'STM32')+text(147,157,'INFERENCE',7)+'</g>'+wire('M216 122h24l15-23');
    b+='<g class="m3-class-panel"><path d="M255 61h75v76h-75z" fill="#1d3e29" stroke="#92b66d"/><path d="M261 67h63v63h-63z" fill="#11261a" stroke="#5d804a"/>'+text(267,82,'CLASSIFY',8,'#d4ff70');for(let i=0;i<3;i++)b+=`<rect x="267" y="${91+i*11}" width="48" height="6" fill="#294a2f"/><rect class="m3-class-score" style="--score:${i}" x="267" y="${91+i*11}" width="48" height="6" fill="${['#c8f77f','#80c5ad','#9bb463'][i]}"/>`;b+='</g>'+text(29,31,'MOTION → FEATURES → ON-DEVICE MODEL',8,'#d4ff70')+text(54,180,'SENSE → EXTRACT → CLASSIFY',8);
  }else if(id==='machineguard'){
    desc='Animated 3D signal monitoring model with an illustrative anomaly indicator';
    b+='<g class="m3-signal-panel"><path d="M24 66h114v64H24z" fill="#1d3c28" stroke="#91b16c"/><path d="M30 72h102v51H30z" fill="#102419" stroke="#547b46"/><path d="M34 103h94" stroke="#70925b" stroke-dasharray="3 4"/>'+text(36,85,'SIGNAL / BASELINE',5)+'<path class="m3-normal-signal" d="M34 105l8-4 7 6 9-8 8 6 8-4 8 5 8-6 9 6 8-3 9 2h12" fill="none" stroke="#b9e880" stroke-width="1.4"/><path class="m3-anomaly-signal" d="M34 105l8-4 7 6 9-8 8 6 8-4 8 5 8-26 9 46 8-23 9 2h12" fill="none" stroke="#edbb7b" stroke-width="1.7"/>'+text(31,149,'SENSOR SIGNAL',7)+'</g>'+wire('M143 106h21l14 15');
    b+='<g class="m3-float">'+model(179,105,'MODEL')+text(171,157,'STM32 / C',7)+'</g>'+wire('M244 123h18l19-22');
    b+='<g class="m3-guard-panel"><path d="M277 69h54v61h-54z" fill="#23452c" stroke="#90b56a"/>'+text(283,84,'CHECK',7,'#d4ff70')+'<circle class="m3-normal-lamp" cx="304" cy="104" r="13" fill="#c4ef7b"/><path class="m3-normal-lamp" d="M297 104l5 5 10-11" fill="none" stroke="#31502a" stroke-width="2"/><path class="m3-alert-lamp" d="M304 89l16 27h-32z" fill="#e4ac70" stroke="#ffdda1"/><g class="m3-alert-lamp">'+text(301,111,'!',13,'#473322')+'</g></g>'+text(29,31,'SENSOR SIGNAL → MODEL → ANOMALY CHECK',8,'#d4ff70')+text(44,180,'MONITOR → COMPARE → FLAG',8);
  }else{
    desc='Animated 3D BME280 sensor, ridge regression model and illustrative temperature forecast';
    b+='<g class="m3-temperature-sensor">'+box(28,102,58,34,'BME280','#769d88')+'<path d="M47 91V74a5 5 0 0110 0v17a9 9 0 11-10 0z" fill="#1a3823" stroke="#c6e7a1"/><path class="m3-thermometer" d="M52 97V77" stroke="#d4ff70" stroke-width="3"/><circle cx="52" cy="98" r="4" fill="#b9e67e"/>'+text(30,152,'TEMPERATURE',7)+'</g>'+wire('M98 117h34');
    b+='<g class="m3-float">'+model(139,107,'RIDGE')+text(132,157,'REGRESSION',7)+'</g>'+wire('M204 125h19l15-22');
    b+='<g class="m3-forecast-panel"><path d="M234 56h99v87h-99z" fill="#1d3c27" stroke="#91b86b"/><path d="M241 63h85v71h-85z" fill="#102318" stroke="#527747"/>'+text(249,76,'FORECAST',8,'#d4ff70')+'<path d="M247 124h73M247 124V84" fill="none" stroke="#708c54" stroke-width=".8"/><path d="M247 116l8-7 8 4 8-10 8 3 8-9" fill="none" stroke="#b9e580" stroke-width="1.5"/><path d="M287 97l8-5 8-4 8-2 9-5v18l-9 0-8 3-8 4-8 3z" fill="#b8e78010"/><path class="m3-forecast-line" d="M287 97l8-5 8-4 8-2 9-5" fill="none" stroke="#d4ff70" stroke-width="2" stroke-dasharray="3 3"/><path d="M287 84v41" fill="none" stroke="#7c9b5c55" stroke-dasharray="2 4"/>'+text(247,132,'PAST',4)+text(291,132,'PREDICT',4)+'</g>'+text(29,31,'BME280 → MODEL → TEMPERATURE FORECAST',8,'#d4ff70')+text(43,180,'MEASURE → INFER → FORECAST',8);
  }
  return `<svg class="ml-project-3d m3-${id}" viewBox="0 0 360 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${desc}">${floor}${b}</svg>`;
}

function visual(kind){
  const text=(x,y,s,c='#a9c596',size=9)=>`<text x="${x}" y="${y}" fill="${c}" font-family="monospace" font-size="${size}">${s}</text>`;
  const block=(x,y,w,h,s)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#1d3724" stroke="#89b657"/>${text(x+9,y+h/2+3,s)}`;
  let body='';
  if(kind==='gpio'){
    body+=block(15,68,85,45,'BUTTON')+block(137,68,85,45,'GPIO');
    body+='<path d="M100 90h37M222 90h37" stroke="#d4ff70" stroke-width="2"/><circle cx="286" cy="90" r="23" fill="#7baf46" stroke="#d4ff70" stroke-width="2"/><circle cx="286" cy="90" r="11" fill="#d4ff70"/>';
    body+=text(275,135,'LED')+text(65,174,'INPUT / REGISTERS / OUTPUT');
  }else if(kind==='pwm'){
    body+='<path d="M20 126v-65h39v65h29V61h39v65h29V61h39v65h29V61h39v65h29V61h39v65" stroke="#d4ff70" stroke-width="2" fill="none"/>';
    body+=text(35,169,'TIMER / DUTY CYCLE / LED BRIGHTNESS');
  }else if(kind==='uart'){
    body+=block(15,66,85,48,'UART RX')+block(137,66,85,48,'DMA')+block(259,66,85,48,'UART TX');
    body+='<path d="M100 90h37M222 90h37" stroke="#d4ff70" stroke-width="2"/>';
    body+=text(73,170,'RECEIVE / TRANSFER / ECHO');
  }else if(kind==='motion'||kind==='thermal'){
    for(let n=0;n<(kind==='motion'?3:1);n++){
      let points='';for(let i=0;i<=70;i++){const x=15+i*4.7;const y=kind==='motion'?57+n*37+Math.sin(i*.55+n*2)*13*Math.sin(i*.09+n)+Math.cos(i*.19)*4:135-i*.9+Math.sin(i*.15)*13+Math.sin(i*1.7)*4;points+=`${x.toFixed(1)},${y.toFixed(1)} `;}
      body+=`<polyline fill="none" points="${points}" stroke="${['#d4ff70','#6fb986','#91a65c'][n]}" stroke-width="1.6"/>`;
    }
    if(kind==='thermal')body+='<path d="M190 98Q240 69 270 60T345 49" stroke="#d4ff70" stroke-width="2" stroke-dasharray="4 5" fill="none"/>';
    body+=text(20,174,kind==='motion'?'SENSOR → FEATURES → MODEL':'BME280 → REGRESSION → FORECAST');
  }else if(kind==='memory'){
    body+=text(22,48,'POOL / HEAP');
    for(let j=0;j<2;j++)for(let i=0;i<7;i++)body+=`<path d="M${26+i*44} ${66+j*46}l29-8 11 8v25l-29 8-11-8z" fill="${(i+j)%3===0?'#d4ff70':'#294b31'}" stroke="#8dad65"/>`;
    body+=text(23,172,'ALLOCATE / SPLIT / COALESCE');
  }else if(kind==='debug'){
    body+='<path d="M24 46h310v105H24z" fill="#101e14" stroke="#4f7750"/>';
    body+=text(38,69,'(gdb) backtrace','#d4ff70',11)+text(38,90,'#0  HardFault_Handler')+text(38,109,'#1  captured context')+text(38,130,'→ inspect exception state','#a5c47f');
    body+=text(25,175,'CORTEX-M4 / EXCEPTION CONTEXT');
  }else if(kind==='rtos'){
    for(let i=0;i<3;i++){
      body+=text(14,58+i*38,`TASK ${i+1}`,'#9fbc8d',8);
      for(let j=0;j<4;j++)body+=`<rect x="${68+j*64+(i%2)*20}" y="${44+i*38}" width="${31+i*3}" height="20" rx="2" fill="${i===0?'#d4ff70':i===1?'#5d9c68':'#819f4f'}" opacity=".85"/>`;
    }
    body+=text(69,174,'COORDINATE / SCHEDULE / EXECUTE');
  }else if(kind==='hub'){
    body+=block(131,70,97,50,'STM32');body+='<g stroke="#9dc86a" fill="none"><path d="M40 48h70v35h21M40 142h70v-35h21M228 95h55V49h35M228 95h55v47h35"/></g>';
    body+=block(8,30,65,30,'SENSOR')+block(8,128,65,30,'INPUT')+block(286,30,65,30,'BUS')+block(286,128,65,30,'OUTPUT');
    body+=text(100,175,'INTERFACES / SENSOR DATA');
  }else if(kind==='boot'){
    body+=block(20,61,91,57,'BOOT')+block(136,61,91,57,'VERIFY')+block(252,61,91,57,'APP');
    body+='<path d="M111 90h25M227 90h25" stroke="#d4ff70" stroke-width="2"/>';
    body+=text(30,164,'STARTUP / FIRMWARE / APPLICATION');
  }else{
    body+='<path d="M24 42h312v111H24z" fill="#101e14" stroke="#4f7750"/>';
    body+=text(38,68,'$ make','#d4ff70',12)+text(38,92,'C sources → object files')+text(38,113,'link → firmware image')+text(38,135,'$ make flash','#d4ff70');
  }
  return svgStart+body+'</svg>';
}

const grid=document.getElementById('project-grid');
if(grid){
function projectCard(p,i){return `<article class="project-card reveal" data-category="${p.type}"><div class="project-visual"><span class="visual-label">${p.label}</span>${p.type==='foundation'?foundationVisual(p.visual):p.type==='peripherals'?peripheralVisual(p.visual):p.type==='drivers'?driverVisual(p.visual):['rtos','protocols'].includes(p.type)?systemProjectVisual(p.id):p.type==='ml'?mlProjectVisual(p.id):visual(p.visual)}<span class="visual-caption">ILLUSTRATIVE ${p.visual==='motion'||p.visual==='thermal'?'SIGNAL':'WORKFLOW'}</span></div><div class="project-body"><span class="project-index">${String(i+1).padStart(2,'0')} / ${p.label}</span><h4>${p.name}</h4><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-links"><button type="button" data-project="${p.id}" aria-label="Read project notes for ${p.name}">Project notes ↗</button><a href="https://github.com/nirzor-deb-25/${p.repo}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.name} repository on GitHub">GitHub ↗</a></div></div></article>`;}
grid.innerHTML=projectGroups.map(group=>{
  const items=projects.filter(p=>p.type===group.id);
  return `<section class="project-group" data-group="${group.id}" aria-labelledby="group-${group.id}"><div class="project-group-heading"><h3 id="group-${group.id}">${group.name}</h3><span>${items.length} project${items.length===1?'':'s'}</span></div><div class="project-grid">${items.map(p=>projectCard(p,projects.indexOf(p))).join('')}</div></section>`;
}).join('');
document.querySelector('.filters').innerHTML=`<button class="selected" data-filter="all" aria-pressed="true">All work <span>${projects.length}</span></button>`+projectGroups.map(group=>`<button data-filter="${group.id}" aria-pressed="false">${group.name}</button>`).join('');
document.getElementById('project-count').textContent=`${projects.length} projects`;


const dialog=document.getElementById('project-dialog');
let dialogTrigger;
grid.addEventListener('click',event=>{
  const button=event.target.closest('[data-project]');if(!button)return;
  const p=projects.find(project=>project.id===button.dataset.project);if(!p)return;
  dialogTrigger=button;
  document.getElementById('dialog-content').innerHTML=`<h2 class="dialog-content-title" id="dialog-title">${p.name}</h2><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><p class="dialog-intro">${p.description}</p><h3 class="dialog-subheading">PROJECT FOCUS</h3><ul class="dialog-list">${p.focus.map(s=>`<li>${s}</li>`).join('')}</ul><h3 class="dialog-subheading">EXPLORE THE IMPLEMENTATION</h3><p class="dialog-intro">${p.explore}</p><a class="button primary" href="https://github.com/nirzor-deb-25/${p.repo}" target="_blank" rel="noopener noreferrer">Open repository <span aria-hidden="true">↗</span></a><p class="dialog-note">The repository contains the source and documentation. Card graphics illustrate the topic and do not represent measured test results.</p>`;
  dialog.showModal();
});
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(dialogTrigger)dialogTrigger.focus();});

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
  let count=0;document.querySelectorAll('.project-card').forEach(card=>{const visible=button.dataset.filter==='all'||card.dataset.category===button.dataset.filter;card.hidden=!visible;if(visible){count++;card.classList.add('visible');}});
  document.querySelectorAll('.project-group').forEach(group=>{group.hidden=button.dataset.filter!=='all'&&group.dataset.group!==button.dataset.filter;});
  document.getElementById('project-count').textContent=`${count} project${count===1?'':'s'}`;
}));

}

if(document.getElementById('board')){
for(const id of ['strip-left','strip-right'])document.getElementById(id).innerHTML='<i></i>'.repeat(50);
document.getElementById('swd-header').innerHTML='<i></i>'.repeat(6);
let parts='';
// Deterministic surface-mounted details; an illustration, not a circuit schematic.
for(let i=0;i<48;i++){
  const x=45+(i*37)%170,y=32+(i*53)%330;
  if((x>89&&x<170&&y>159&&y<245)||(x>55&&x<190&&y>252&&y<300)||(x>86&&x<145&&y<107))continue;
  parts+=`<i class="smd ${i%3===0?'dark':''}" style="left:${x}px;top:${y}px;width:${i%2?4:6}px;height:${i%2?7:3}px"></i>`;
}
document.getElementById('smd-parts').innerHTML=parts;
const board=document.getElementById('board'),stage=document.getElementById('hardware-stage');
let drag=null,rx=33,ry=-18,rz=-23;
function boardScale(){const w=window.innerWidth;return w<=700?.82:w<=900?.65:w<=1150?.76:.82;}
function rotateBoard(){board.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${boardScale()})`;}
stage.addEventListener('pointerdown',e=>{if(e.target.closest('button')||stage.dataset.mode!=='motion'||stage.dataset.slide!=='0')return;drag={x:e.clientX,y:e.clientY,rx,ry};if(e.pointerType!=='touch')stage.setPointerCapture(e.pointerId);});
stage.addEventListener('pointermove',e=>{if(!drag)return;ry=Math.max(-65,Math.min(65,drag.ry+(e.clientX-drag.x)*.35));rx=Math.max(0,Math.min(65,drag.rx-(e.clientY-drag.y)*.25));rotateBoard();});
function endDrag(){drag=null;}window.addEventListener('pointerup',endDrag);stage.addEventListener('pointercancel',endDrag);stage.addEventListener('lostpointercapture',endDrag);
document.getElementById('reset-view').addEventListener('click',()=>{rx=33;ry=-18;rz=-23;board.style.transform='';});
window.addEventListener('resize',()=>{if(board.style.transform)rotateBoard();});

}

const motionButton=document.getElementById('motion-toggle');
const motionMedia=window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=motionMedia.matches;
try{const saved=localStorage.getItem('nirzor-motion');if(saved!==null)motionPaused=saved==='paused';}catch(_){/* Storage is optional. */}
function setMotion(paused){motionPaused=paused;document.documentElement.classList.toggle('paused',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.setAttribute('aria-label',paused?'Resume animations':'Pause animations');motionButton.title=paused?'Resume animations':'Pause animations';motionButton.firstElementChild.textContent=paused?'▶':'Ⅱ';}
setMotion(motionPaused);
motionButton.addEventListener('click',()=>{setMotion(!motionPaused);try{localStorage.setItem('nirzor-motion',motionPaused?'paused':'running');}catch(_){}});
motionMedia.addEventListener('change',e=>setMotion(e.matches));
if('IntersectionObserver' in window&&!motionMedia.matches){
  document.documentElement.classList.add('js-reveal');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const menuToggle=document.getElementById('menu-toggle'),mobileNav=document.getElementById('mobile-nav');
function closeMenu(){mobileNav.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');}
menuToggle.addEventListener('click',()=>{const open=mobileNav.hidden;mobileNav.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.getElementById('copy-email')?.addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('nirzordeb79@gmail.com');status.textContent='Email copied';}catch(_){status.textContent='Select the email link to send a message.';}});
document.getElementById('year').textContent=new Date().getFullYear();

// Gentle pointer parallax for the About portrait, layered over its automatic sway.
const portrait3d=document.getElementById('portrait-3d');
if(portrait3d){
  portrait3d.addEventListener('pointermove',event=>{
    if(motionPaused||motionMedia.matches||event.pointerType==='touch')return;
    const rect=portrait3d.getBoundingClientRect();
    const px=(event.clientX-rect.left)/rect.width-.5;
    const py=(event.clientY-rect.top)/rect.height-.5;
    portrait3d.style.setProperty('--portrait-y',`${px*8}deg`);
    portrait3d.style.setProperty('--portrait-x',`${-py*6}deg`);
  });
  portrait3d.addEventListener('pointerleave',()=>{
    portrait3d.style.setProperty('--portrait-x','0deg');
    portrait3d.style.setProperty('--portrait-y','0deg');
  });
}

// Keep previously shared section links working after the move to separate pages.
if(document.body.dataset.page==='home'){
 const oldPages={projects:"projects.html",about:"about.html",skills:"toolkit.html",learning:"learning.html",contact:"contact.html"};
 const oldTarget=oldPages[location.hash.slice(1)];
 if(oldTarget)location.replace("./"+oldTarget);
}
