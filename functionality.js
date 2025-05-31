document.getElementById('load').addEventListener('click', async () => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');
        if (!response.ok) throw new Error('HTTP error! Status: ' + response.status);

        const entries = await response.json();
        const content = document.getElementById('content');
        content.innerHTML = ''; // Clear existing list

        entries.forEach(entry => {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = `${entry.id}) ${entry.title}`;
            content.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});