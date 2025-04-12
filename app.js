// Netherlands map data - simplified coordinates for demonstration
const netherlandsRegions = [
    { name: 'Noord-Holland', center: { x: 200, y: 200 } },
    { name: 'Zuid-Holland', center: { x: 180, y: 250 } },
    { name: 'Utrecht', center: { x: 220, y: 230 } },
    { name: 'Gelderland', center: { x: 250, y: 240 } },
    { name: 'Noord-Brabant', center: { x: 220, y: 280 } },
    { name: 'Limburg', center: { x: 260, y: 300 } },
    { name: 'Zeeland', center: { x: 150, y: 300 } },
    { name: 'Flevoland', center: { x: 230, y: 180 } },
    { name: 'Overijssel', center: { x: 270, y: 180 } },
    { name: 'Drenthe', center: { x: 250, y: 140 } },
    { name: 'Groningen', center: { x: 260, y: 100 } },
    { name: 'Friesland', center: { x: 220, y: 120 } }
];

// Fart types with their characteristics
const fartTypes = [
    { name: 'DeanBeving', intensity: 5, radius: 40, color: '#8B4513', sound: 'BOOM' },
    { name: 'Stamppotpruttel', intensity: 3, radius: 30, color: '#A0522D', sound: 'puff' },
    { name: 'Hollandse Windmolen', intensity: 2, radius: 20, color: '#B8860B', sound: 'whiff' },
    { name: 'Klompendamp', intensity: 4, radius: 35, color: '#8B7355', sound: 'poot' },
    { name: 'Tulpentoeter', intensity: 5, radius: 45, color: '#CD853F', sound: 'toot' },
    { name: 'Stroopwafelsnuiver', intensity: 4, radius: 38, color: '#D2691E', sound: 'whoosh' },
    { name: 'Hagelslagnevel', intensity: 2, radius: 25, color: '#8B4513', sound: 'puff' },
    { name: 'Bitterbalblast', intensity: 5, radius: 42, color: '#A0522D', sound: 'toot' },
    { name: 'Krokettenknal', intensity: 4, radius: 36, color: '#B8860B', sound: 'poot' },
    { name: 'Poffertjespuf', intensity: 3, radius: 28, color: '#CD853F', sound: 'whiff' },
    { name: 'Herfstwindhoest', intensity: 4, radius: 37, color: '#8B7355', sound: 'whoosh' },
    { name: 'Polderplof', intensity: 5, radius: 43, color: '#D2691E', sound: 'poot' },
    { name: 'Zuiderzeezucht', intensity: 2, radius: 22, color: '#8B4513', sound: 'whiff' },
    { name: 'Deltawerkendondering', intensity: 5, radius: 45, color: '#A0522D', sound: 'toot' },
    { name: 'Grachtengerommel', intensity: 3, radius: 32, color: '#B8860B', sound: 'puff' },
    { name: 'Molenwiekwapper', intensity: 4, radius: 39, color: '#CD853F', sound: 'whoosh' },
    { name: 'Tulpenveldtrembling', intensity: 3, radius: 31, color: '#8B7355', sound: 'whiff' },
    { name: 'Klompenklopper', intensity: 5, radius: 41, color: '#D2691E', sound: 'poot' },
    { name: 'Delftsblauweduiker', intensity: 2, radius: 24, color: '#8B4513', sound: 'puff' },
    { name: 'Waddenwindwaai', intensity: 4, radius: 38, color: '#A0522D', sound: 'toot' },
    { name: 'Veluwevendel', intensity: 3, radius: 29, color: '#B8860B', sound: 'whiff' },
    { name: 'Frikandelflits', intensity: 5, radius: 44, color: '#CD853F', sound: 'poot' },
    { name: 'Bossche Bolbombardement', intensity: 4, radius: 37, color: '#8B7355', sound: 'whoosh' },
    { name: 'Zeeuwse Mosselmist', intensity: 3, radius: 33, color: '#D2691E', sound: 'puff' },
    { name: 'Limburgse Vlaaivaart', intensity: 5, radius: 42, color: '#8B4513', sound: 'toot' },
    { name: 'Drentse Heidehik', intensity: 2, radius: 23, color: '#A0522D', sound: 'whiff' },
    { name: 'Groningse Gaswolk', intensity: 4, radius: 36, color: '#B8860B', sound: 'poot' },
    { name: 'Friese Fierheid', intensity: 3, radius: 30, color: '#CD853F', sound: 'whoosh' },
    { name: 'Utrechtse Domdeun', intensity: 5, radius: 43, color: '#8B7355', sound: 'puff' },
    { name: 'Amsterdamse Grachtengalm', intensity: 4, radius: 38, color: '#D2691E', sound: 'toot' },
    { name: 'Rotterdamse Havenhoos', intensity: 5, radius: 45, color: '#8B4513', sound: 'whiff' },
    { name: 'Volendamse Visdamp', intensity: 3, radius: 32, color: '#A0522D', sound: 'poot' },
    { name: 'Goudse Kaasgeur', intensity: 4, radius: 37, color: '#B8860B', sound: 'whoosh' },
    { name: 'Edammer Explosie', intensity: 5, radius: 41, color: '#CD853F', sound: 'puff' },
    { name: 'Zaanse Molenzoef', intensity: 2, radius: 25, color: '#8B7355', sound: 'toot' },
    { name: 'Marker Meermist', intensity: 3, radius: 31, color: '#D2691E', sound: 'whiff' },
    { name: 'IJsselmeerIjzel', intensity: 4, radius: 39, color: '#8B4513', sound: 'poot' },
    { name: 'Texelse Schapensnuf', intensity: 3, radius: 34, color: '#A0522D', sound: 'whoosh' },
    { name: 'Terschellinger Tocht', intensity: 5, radius: 44, color: '#B8860B', sound: 'puff' },
    { name: 'Amelandse Adem', intensity: 2, radius: 26, color: '#CD853F', sound: 'toot' },
    { name: 'Schiermonnikoogse Schicht', intensity: 4, radius: 38, color: '#8B7355', sound: 'whiff' },
    { name: 'Vlielandse Vlaag', intensity: 3, radius: 33, color: '#D2691E', sound: 'poot' },
    { name: 'Noordzee Nevel', intensity: 5, radius: 42, color: '#8B4513', sound: 'whoosh' },
    { name: 'Duinendonder', intensity: 4, radius: 37, color: '#A0522D', sound: 'puff' },
    { name: 'Strandstoot', intensity: 3, radius: 30, color: '#B8860B', sound: 'toot' },
    { name: 'Boulevardbriesje', intensity: 2, radius: 24, color: '#CD853F', sound: 'whiff' },
    { name: 'Pierenpruttel', intensity: 4, radius: 36, color: '#8B7355', sound: 'poot' },
    { name: 'Zanddampzucht', intensity: 5, radius: 43, color: '#D2691E', sound: 'whoosh' },
    { name: 'Schelpengeschal', intensity: 3, radius: 32, color: '#8B4513', sound: 'puff' },
    { name: 'Juttersjeuk', intensity: 4, radius: 38, color: '#A0522D', sound: 'toot' },
    { name: 'Windmolenwieker', intensity: 5, radius: 45, color: '#B8860B', sound: 'whiff' },
    { name: 'Polderprutser', intensity: 2, radius: 25, color: '#CD853F', sound: 'poot' },
    { name: 'Dijkendreun', intensity: 4, radius: 37, color: '#8B7355', sound: 'whoosh' },
    { name: 'Sluizensuizer', intensity: 3, radius: 31, color: '#D2691E', sound: 'puff' },
    { name: 'Gemaalgebrom', intensity: 5, radius: 42, color: '#8B4513', sound: 'toot' }
];

// Sound effects for different fart types
const fartSounds = {
    whoosh: '💨 Whoooooosh!',
    puff: '💨 Pfffff!',
    whiff: '💨 Whifffff!',
    poot: '💨 Pooooot!',
    toot: '💨 Tooooot!'
};

// Names for fart sources
const fartSources = [
    'Opa na een bord erwtensoep',
    'Nasleep van bitterballen buffet',
    'Haring met uitjes incident',
    'Après-kroket moment',
    'Gouda kaasproeverij gevolgen',
    'Boerenkool met worst effect'
];

// Initialize the map
function initMap() {
    const mapContainer = document.getElementById('netherlands-map');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 400 400');
    mapContainer.appendChild(svg);
    return svg;
}

// Generate random fart weather data
function generateFartWeather() {
    return netherlandsRegions.map(region => {
        if (Math.random() > 0.5) {
            const fartType = fartTypes[Math.floor(Math.random() * fartTypes.length)];
            const source = fartSources[Math.floor(Math.random() * fartSources.length)];
            return {
                region: region.name,
                center: region.center,
                fartType: fartType,
                source: source,
                intensity: Math.floor(Math.random() * 5) + 1
            };
        }
        return null;
    }).filter(data => data !== null);
}

// Update the map visualization
function updateMap(svg, fartData) {
    // Clear previous circles
    svg.innerHTML = '';
    
    // Add new circles with animations
    fartData.forEach(data => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', data.center.x);
        circle.setAttribute('cy', data.center.y);
        circle.setAttribute('r', 0); // Start with radius 0 for animation
        circle.setAttribute('class', 'brown-circle');
        circle.setAttribute('data-region', data.region);
        circle.style.fill = `${data.fartType.color}40`; // 40 is hex for 25% opacity
        circle.style.stroke = data.fartType.color;
        
        // Add hover effect and click event
        circle.addEventListener('mouseover', () => showFartInfo(data));
        circle.addEventListener('click', () => playFartSound(data.fartType.sound));
        
        svg.appendChild(circle);
        
        // Animate circle appearance
        setTimeout(() => {
            circle.style.transition = 'r 0.5s ease-out';
            circle.setAttribute('r', data.fartType.radius);
        }, 100);
    });
}

// Update the information panel
function updateInfoPanel(fartData) {
    const alertsContainer = document.getElementById('fart-alerts');
    alertsContainer.innerHTML = '';
    
    fartData.forEach(data => {
        const alert = document.createElement('div');
        alert.className = 'fart-alert';
        alert.style.borderColor = data.fartType.color;
        alert.innerHTML = `
            <strong>${data.region}</strong>
            <div>Soort: ${data.fartType.name}</div>
            <div>Oorzaak: ${data.source}</div>
            <div>Intensiteit: 
                <span class="intensity-indicator" style="color: ${data.fartType.color}">
                    ${'💨'.repeat(data.intensity)}
                </span>
            </div>
        `;
        
        // Add click event to play sound
        alert.addEventListener('click', () => playFartSound(data.fartType.sound));
        alertsContainer.appendChild(alert);
    });
}

// Show fart information on hover
function showFartInfo(data) {
    // Highlight the corresponding alert
    const alerts = document.querySelectorAll('.fart-alert');
    alerts.forEach(alert => {
        if (alert.querySelector('strong').textContent === data.region) {
            alert.style.background = `${data.fartType.color}20`; // 20 is hex for 12% opacity
            alert.style.transform = 'translateX(10px)';
        } else {
            alert.style.background = 'linear-gradient(135deg, #fff8e1, #fff4e5)';
            alert.style.transform = 'translateX(0)';
        }
    });
}

// Play fart sound effect
function playFartSound(soundType) {
    const soundText = fartSounds[soundType];
    const soundElement = document.createElement('div');
    soundElement.textContent = soundText;
    soundElement.style.position = 'fixed';
    soundElement.style.left = '50%';
    soundElement.style.top = '50%';
    soundElement.style.transform = 'translate(-50%, -50%)';
    soundElement.style.fontSize = '2em';
    soundElement.style.opacity = '0';
    soundElement.style.transition = 'all 0.5s ease-out';
    soundElement.style.pointerEvents = 'none';
    document.body.appendChild(soundElement);
    
    // Animate sound effect
    setTimeout(() => {
        soundElement.style.opacity = '1';
        soundElement.style.transform = 'translate(-50%, -100%)';
    }, 50);
    
    setTimeout(() => {
        soundElement.remove();
    }, 1000);
}

// Initialize the application
function init() {
    const svg = initMap();
    
    // Update fart weather every 5 minutes
    function updateFartWeather() {
        const fartData = generateFartWeather();
        updateMap(svg, fartData);
        updateInfoPanel(fartData);
    }
    
    // Initial update
    updateFartWeather();
    
    // Set up periodic updates
    setInterval(updateFartWeather, 5 * 60 * 1000);
}

// Start the application when the page loads
window.addEventListener('load', init);