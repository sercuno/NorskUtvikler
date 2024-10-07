document.getElementById('lage_knapp').addEventListener('click', function() {
    
    const prosjektInfoDiv = document.getElementById('prosjekt_info');
    prosjektInfoDiv.innerHTML = ''; 

   
    const newProject = document.createElement('div');
    newProject.classList.add('project'); 
    newProject.innerHTML = `
        <h2>Nytt Prosjekt</h2>
        <p>Dette er informasjon om det nye prosjektet ditt.</p>
        <button class="closeBtn">Lukk</button>
    `;

    prosjektInfoDiv.appendChild(newProject);

    newProject.querySelector('.closeBtn').addEventListener('click', function() {
        prosjektInfoDiv.removeChild(newProject); 
    });
});
