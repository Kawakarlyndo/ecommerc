// Dados dos produtos
const products = {
    camisas: [
        {
            id: 1,
            name: "Camisa Polo Classic",
            description: "Camisa polo em algodão penteado, disponível em várias cores.",
            price: "R$ 89,90",
            image: "https://via.placeholder.com/300x400?text=Camisa+Polo"
        },
        {
            id: 2,
            name: "Camisa Social Slim",
            description: "Camisa social ajustada, perfeita para o ambiente corporativo.",
            price: "R$ 129,90",
            image: "https://via.placeholder.com/300x400?text=Camisa+Social"
        },
        {
            id: 3,
            name: "Camiseta Basic",
            description: "Camiseta básica em algodão 100%, ideal para o dia a dia.",
            price: "R$ 39,90",
            image: "https://via.placeholder.com/300x400?text=Camiseta+Basic"
        }
    ],
    tenis: [
        {
            id: 4,
            name: "Tênis Esportivo Runner",
            description: "Tênis para corrida com amortecimento de alta performance.",
            price: "R$ 199,90",
            image: "https://via.placeholder.com/300x400?text=Tênis+Runner"
        },
        {
            id: 5,
            name: "Tênis Casual Street",
            description: "Tênis casual estilo streetwear, confortável e moderno.",
            price: "R$ 159,90",
            image: "https://via.placeholder.com/300x400?text=Tênis+Street"
        },
        {
            id: 6,
            name: "Tênis Skate Pro",
            description: "Tênis especializado para skateboarding com solado resistente.",
            price: "R$ 179,90",
            image: "https://via.placeholder.com/300x400?text=Tênis+Skate"
        }
    ],
    acessorios: [
        {
            id: 7,
            name: "Relógio Classic",
            description: "Relógio de pulso com pulseira em couro legítimo.",
            price: "R$ 149,90",
            image: "https://via.placeholder.com/300x400?text=Relógio+Classic"
        },
        {
            id: 8,
            name: "Boné Snapback",
            description: "Boné ajustável com fechamento snapback, vários modelos.",
            price: "R$ 59,90",
            image: "https://via.placeholder.com/300x400?text=Boné+Snapback"
        },
        {
            id: 9,
            name: "Cinto de Couro",
            description: "Cinto em couro legítimo com fivela metálica.",
            price: "R$ 79,90",
            image: "https://via.placeholder.com/300x400?text=Cinto+Couro"
        }
    ]
};

// Elementos da DOM
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const authSection = document.getElementById('authSection');
const userProfile = document.getElementById('userProfile');
const userAvatar = document.getElementById('userAvatar');
const loginMessage = document.getElementById('loginMessage');
const categoryLinks = document.querySelectorAll('[data-category]');
const categoryProducts = document.getElementById('categoryProducts');
const categoryTitle = document.getElementById('categoryTitle');
const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const searchTermSpan = document.getElementById('searchTerm');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const allProductsContainer = document.getElementById('allProductsContainer');

// Mostrar produtos de uma categoria
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        showCategoryProducts(category);
    });
});

function showCategoryProducts(category) {
    // Esconder outros conteúdos
    searchResults.style.display = 'none';
    allProductsContainer.style.display = 'grid';
    
    // Mostrar produtos da categoria
    const categoryName = category === 'camisas' ? 'Camisas' : 
                        category === 'tenis' ? 'Tênis' : 'Acessórios';
    categoryTitle.textContent = categoryName;
    productsContainer.innerHTML = '';
    
    products[category].forEach(product => {
        productsContainer.appendChild(createProductCard(product));
    });
    
    categoryProducts.style.display = 'block';
    allProductsContainer.style.display = 'none';
    
    // Scroll para a seção de produtos
    categoryProducts.scrollIntoView({ behavior: 'smooth' });
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <p class="product-description">${product.description}</p>
            <button class="btn-submit">Comprar</button>
        </div>
    `;
    
    return card;
}

// Busca de produtos
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        return;
    }
    
    // Esconder produtos por categoria
    categoryProducts.style.display = 'none';
    allProductsContainer.style.display = 'none';
    
    // Filtrar produtos
    const allProducts = [...products.camisas, ...products.tenis, ...products.acessorios];
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    ).sort((a, b) => a.name.localeCompare(b.name));
    
    // Mostrar resultados
    searchTermSpan.textContent = searchTerm;
    searchResultsContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        searchResultsContainer.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
    } else {
        filteredProducts.forEach(product => {
            searchResultsContainer.appendChild(createProductCard(product));
        });
    }
    
    searchResults.style.display = 'block';
    
    // Scroll para os resultados
    searchResults.scrollIntoView({ behavior: 'smooth' });
}

// Mostrar todos os produtos inicialmente
function displayAllProducts() {
    allProductsContainer.innerHTML = '';
    
    const allProducts = [...products.camisas, ...products.tenis, ...products.acessorios];
    
    allProducts.forEach(product => {
        allProductsContainer.appendChild(createProductCard(product));
    });
}

// Sistema de Login Simulado
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
    loginMessage.textContent = '';
    loginMessage.className = 'message';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
        loginMessage.textContent = '';
        loginMessage.className = 'message';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Usuário de teste pré-cadastrado
    if (email === 'test@gmail.com' && password === '123456') {
        loginMessage.textContent = 'Login realizado com sucesso!';
        loginMessage.className = 'message success';
        
        setTimeout(() => {
            loginModal.style.display = 'none';
            updateUI(true);
            userAvatar.src = `https://ui-avatars.com/api/?name=Test&background=007bff&color=fff`;
            loginForm.reset();
        }, 1000);
    } else {
        loginMessage.textContent = 'E-mail ou senha incorretos';
        loginMessage.className = 'message error';
    }
});

logoutBtn.addEventListener('click', () => {
    updateUI(false);
});

function updateUI(isLoggedIn) {
    if (isLoggedIn) {
        loginBtn.style.display = 'none';
        userProfile.style.display = 'flex';
    } else {
        loginBtn.style.display = 'block';
        userProfile.style.display = 'none';
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateUI(false);
    displayAllProducts();
});