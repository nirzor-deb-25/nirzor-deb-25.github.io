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
function projectCard(p,i){return `<article class="project-card reveal" data-category="${p.type}"><div class="project-visual"><span class="visual-label">${p.label}</span>${visual(p.visual)}<span class="visual-caption">ILLUSTRATIVE ${p.visual==='motion'||p.visual==='thermal'?'SIGNAL':'WORKFLOW'}</span></div><div class="project-body"><span class="project-index">${String(i+1).padStart(2,'0')} / ${p.label}</span><h4>${p.name}</h4><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-links"><button type="button" data-project="${p.id}" aria-label="Read project notes for ${p.name}">Project notes ↗</button><a href="https://github.com/nirzor-deb-25/${p.repo}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.name} repository on GitHub">GitHub ↗</a></div></div></article>`;}
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
stage.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;drag={x:e.clientX,y:e.clientY,rx,ry};if(e.pointerType!=='touch')stage.setPointerCapture(e.pointerId);});
stage.addEventListener('pointermove',e=>{if(!drag)return;ry=Math.max(-65,Math.min(65,drag.ry+(e.clientX-drag.x)*.35));rx=Math.max(0,Math.min(65,drag.rx-(e.clientY-drag.y)*.25));rotateBoard();});
function endDrag(){drag=null;}window.addEventListener('pointerup',endDrag);stage.addEventListener('pointercancel',endDrag);stage.addEventListener('lostpointercapture',endDrag);
document.getElementById('reset-view').addEventListener('click',()=>{rx=33;ry=-18;rz=-23;board.style.transform='';});
window.addEventListener('resize',()=>{if(board.style.transform)rotateBoard();});
const modeDescriptions={motion:'ACCELEROMETER / MOTION CLASSIFICATION',sensor:'SENSOR INPUT / TEMPERATURE FORECASTING',system:'FIRMWARE / REAL-TIME TASKS'};
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  stage.dataset.mode=button.dataset.mode;
  document.getElementById('mode-label').textContent=modeDescriptions[button.dataset.mode];
  const hues={motion:'0deg',sensor:'35deg',system:'-25deg'};stage.querySelector('.trace-active').style.filter=`hue-rotate(${hues[button.dataset.mode]})`;
}));

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
document.getElementById('copy-email').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('nirzordeb79@gmail.com');status.textContent='Email copied';}catch(_){status.textContent='Select the email link to send a message.';}});
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
