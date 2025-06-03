let n = 0


document.getElementById('load').addEventListener('click',  async () => {
    const res = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');
    const post = await res.json();
    const content = document.getElementById('content');

    if (n < post.length) {

        // add cards in increments of 5
        n += 5
        content.innerHTML = ''

        for (let i = 0; i < n; i++) {
            const card = document.createElement('div');
            card.className = 'regular';
            card.innerHTML = "";
            let entry = post[i];

            card.innerHTML = `<h2>${entry.title}<br>A.D. ${entry.year}, ${entry.location}</h2>
                              <img src="${entry.image}" alt="img${entry.id}">
                              <h3>${entry.summary}</h3><p>Category: ${entry.category}<br>${entry.details}</p>`;


            // add listeners to expand active card using CSS
            card.addEventListener('mouseenter', async () => {
                card.className = 'expanded';
            });
            card.addEventListener('mouseleave', async () => {
                card.className = 'regular';
            });

            // done
            content.appendChild(card);
        }
    }
});