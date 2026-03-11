// Default data
const defaultActions = [
    "Sensually Lick",
    "Firmly Bite",
    "Sensually Pinch",
    "Sensually Squeeze",
    "Sensually Suck",
    "Sensually Massage",
    "Sensually stroke",
    "Passionately kiss",
    "Firmly squeeze",
    "Playfully slap",
    "Firmly slap",
    "Sensually blow on",
    "Gently massage",
    "Firmly spank",
    "Breathe hot air on",
    "Gently touch and tease",
    "Playfully tease and tantalize",
    "Sensually stroke and caress"
];

const defaultBodyParts = [
    "stomach",
    "bareback",
    "neck",
    "face",
    "cheek",
    "lips",
    "ear",
    "forehead",
    "thigh",
    "finger",
    "toe",
    "chest",
    "boobs",
    "Clitoris",
    "Vagina",
    "waist",
    "butt",
    "Penis",
    "testicles",
    "pubic area",
    "inner thigh",
    "anus",
    "vulva"
];

// State management
let actions = [];
let bodyParts = [];

// Load data from localStorage or use defaults
function loadData() {
    const savedActions = localStorage.getItem('actions');
    const savedBodyParts = localStorage.getItem('bodyParts');
    
    actions = savedActions ? JSON.parse(savedActions) : [...defaultActions];
    bodyParts = savedBodyParts ? JSON.parse(savedBodyParts) : [...defaultBodyParts];
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('actions', JSON.stringify(actions));
    localStorage.setItem('bodyParts', JSON.stringify(bodyParts));
}

// Generate random moment
function generateMoment() {
    if (actions.length === 0 || bodyParts.length === 0) {
        alert('Please add at least one action and one body part!');
        return;
    }
    
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    const moment = `${randomAction} ${randomBodyPart}`;
    
    const display = document.getElementById('resultDisplay');
    display.textContent = moment;
    display.classList.remove('new-result');
    
    // Trigger animation
    setTimeout(() => {
        display.classList.add('new-result');
    }, 10);
}

// Render actions list
function renderActionsList() {
    const container = document.getElementById('actionsList');
    container.innerHTML = '';
    
    actions.forEach((action, index) => {
        const tag = document.createElement('div');
        tag.className = 'item-tag';
        tag.innerHTML = `
            ${action}
            <button class="remove-btn" onclick="removeAction(${index})">×</button>
        `;
        container.appendChild(tag);
    });
}

// Render body parts list
function renderBodyPartsList() {
    const container = document.getElementById('bodyPartsList');
    container.innerHTML = '';
    
    bodyParts.forEach((part, index) => {
        const tag = document.createElement('div');
        tag.className = 'item-tag';
        tag.innerHTML = `
            ${part}
            <button class="remove-btn" onclick="removeBodyPart(${index})">×</button>
        `;
        container.appendChild(tag);
    });
}

// Add action
function addAction() {
    const input = document.getElementById('actionInput');
    const value = input.value.trim();
    
    if (value === '') {
        alert('Please enter an action!');
        return;
    }
    
    if (actions.includes(value)) {
        alert('This action already exists!');
        return;
    }
    
    actions.push(value);
    saveData();
    renderActionsList();
    input.value = '';
}

// Add body part
function addBodyPart() {
    const input = document.getElementById('bodyPartInput');
    const value = input.value.trim();
    
    if (value === '') {
        alert('Please enter a body part!');
        return;
    }
    
    if (bodyParts.includes(value)) {
        alert('This body part already exists!');
        return;
    }
    
    bodyParts.push(value);
    saveData();
    renderBodyPartsList();
    input.value = '';
}

// Remove action
function removeAction(index) {
    actions.splice(index, 1);
    saveData();
    renderActionsList();
}

// Remove body part
function removeBodyPart(index) {
    bodyParts.splice(index, 1);
    saveData();
    renderBodyPartsList();
}

// Reset to default
function resetToDefault() {
    if (confirm('Are you sure you want to reset to default? This will remove all your custom additions.')) {
        actions = [...defaultActions];
        bodyParts = [...defaultBodyParts];
        saveData();
        renderActionsList();
        renderBodyPartsList();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderActionsList();
    renderBodyPartsList();
    
    // Generate button
    document.getElementById('generateBtn').addEventListener('click', generateMoment);
    
    // Add action button and enter key
    document.getElementById('addActionBtn').addEventListener('click', addAction);
    document.getElementById('actionInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addAction();
    });
    
    // Add body part button and enter key
    document.getElementById('addBodyPartBtn').addEventListener('click', addBodyPart);
    document.getElementById('bodyPartInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addBodyPart();
    });
    
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetToDefault);
});
