let n = 0;

class Card {
    constructor (id, data) {
        this.card = document.getElementById(id);
        this.modalId = "modal" + id;
        this.buttonId = "btn" + id;
        this.closeButton = "close" + id;

        // make the card
        this.card.innerHTML = `<h2 class="modern">${data.title}</h2>
                               <h3 class="modern">${data.location}, ${data.year}</h3>
                               <h4 class="modern">Category: ${data.category}</h4><br>
                               <span class="medieval">${data.summary}</span><br>
                               <button id=${this.buttonId} class="button">More Info</button>
                               
                               <div id=${this.modalId} class="modal">
                                    <button id=${this.closeButton} class="close">&times;</button>
                                    <div class="modalContents">
                                        <h3 class="medieval">${data.title}</h3>
                                        <h5 class="medieval">Miracle Type: ${data.type}</h5
                                        <span class="modern">${data.summary} ${data.details}</span><br><br>
                                        <span class="modern">
                                        This ${capitalize(data.category)} miracle occured in ${data.location} in ${data.year}.
                                        </span>
                                        
                                    </div>
                               </div>`;

        document.getElementById(this.modalId).style.display = "none";

        document.getElementById(this.buttonId).addEventListener('click', () => {
            document.getElementById(this.modalId).style.display = "block";
        });

        document.getElementById(this.closeButton).addEventListener('click', () => {
            document.getElementById(this.modalId).style.display = "none";
        });
    }
}


document.getElementById('load').addEventListener('click',  async () => {
    const res = await fetch('https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json');
    const post = await res.json();
    const content = document.getElementById('content');

    for (let i = 0; i < 5; i++) {
        // track current card index
        let idx = n+i;
        if (idx < post.length) {
            // create new card element and connect Card class
            let newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.id = 'id' + idx;
            content.appendChild(newCard);

            new Card(newCard.id, post[idx]);
        }

        // Get rid of `load` button
        if  (idx >= post.length-1) {
            document.getElementById('load').style.display = 'none';
        }
    }

    // increment counter to display cards in batches of 5
    n += 5;
});

function capitalize(string) {
    let capitalized = '';
    string.split(" ").forEach(s => {
        capitalized += s.charAt(0).toUpperCase() + s.substring(1) + " ";
    });
    return capitalized;
}
