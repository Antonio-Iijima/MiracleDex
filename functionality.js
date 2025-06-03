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
            card.className = 'card';
            card.textContent = `${post[i].title}, ${post[i].location}`;

            // add listeners to expand active card using CSS
            card.addEventListener('mouseenter', async () => {
                card.className = 'expanded';
            });
            card.addEventListener('mouseleave', async () => {
                card.className = 'card';
                card.textContent = `${post[i].title}, ${post[i].location}`;
            });

            // done
            content.appendChild(card);
        }
    }
});