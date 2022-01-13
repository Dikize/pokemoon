
// fetch('https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82')
//     .then(res => res.json())
//     .then(data => console.log(data))


// import bscscan, { account } from 'bsc-scan'

// bscscan.setUrl('https://testnet.bscscan.com')
// bscscan.setApiKey('YourApiKeyToken')

// const start = async () => {
//     try {
//         const balance = await account.getBnbBalance('0x765090aB712984081aeE059eA7025C48a4198183')
//         console.log(`Your balance is: ${balance}`)
//     } catch (err) {
//         console.log(err)
//     }
// }

// start()


fetch('https://api.pancakeswap.info/api/v2/tokens/0x1889f1ae46c2da9e8f3532a21cc4719e2db35f7b')
// fetch('https://api.pancakeswap.info/api/v2/tokens/0x1889f1ae46c2da9e8f3532a21cc4719e2db35f7b')
    .then(res => res.json())
    .then(data => {
        console.log(data.data.name)

        // recupère l'élément liste dans le HTML
        const card = document.getElementById("liste");
        // convertit le prix
        const price = convertPrice(data.data.price);

        card.innerHTML += `
            <h1 class="text-center">$${data.data.name}</h1>
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col">symbol</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">price_BNB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${data.data.symbol}</td>
                        <th scope="row">${data.data.name}</th>
                        <td>${price}</td>
                        <td>${data.data.price_BNB}</td>
                    </tr>
                </tbody>
            </table>
        `;
    })
    .catch((erreur) => {
        console.log("erreur : " + erreur)
        alert("Veuillez nous exuser les produits ne sont pas disponible pour le moment.")
    });



// convertir le prix
function convertPrice(productPrice) {
    let price = `${productPrice}`;
    // constructeur pour formater des nombres en fonction du locale ici fr.
    price = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        // minimumFractionDigits le nombre minimum de chiffres de fraction à utiliser
        minimumFractionDigits: 2,
    }).format(price / 100);
    return price;
}

// fonction pour la création des cards de la page d'accueil
function addCards(data) {
    //boucle pour chaque afficher chaque produit contenue dans l'API dans une carte 
    for (produit of data) {
        // recupère l'élément liste dans le HTML
        const card = document.getElementById("liste");
        // convertit le prix
        const price = convertPrice(produit.price);

        // insérer le HTML dans le document
        card.innerHTML += `
            <div class="col-sm-12 col-md-6 col-lg-6 pb-3 carte ">
                <div class="card border shadow p-3 mb-5 bg-body rounded">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 col-sm-7 mt-3" >
                                <h5 class="card-title">${produit.name}</h5>
                            </div>
                            <div class="col-6 col-sm-5 text-end mt-3">
                                <h5 class="card-title">${price}</h5>
                            </div>
                        </div>
                        <p class="card-text text-truncate">${produit.price_BNB}</p>
                        <a href="./front-vaniaJS/pages/produit.html?_id=${produit.symbol}" class="btn btn-light">Ajouter au panier</a>
                    </div>
                </div>
            </div>
        `;
    }
}