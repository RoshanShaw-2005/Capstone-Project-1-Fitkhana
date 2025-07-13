const recipes = [
      {
        id: 1,
        title: "Quinoa Salad Bowl",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        time: "25 mins",
        calories: "420 kcal",
        type: "Lunch",
        diet: ["vegetarian", "vegan"],
        description: "A refreshing and protein-packed quinoa salad with fresh vegetables and a lemon-tahini dressing.",
        ingredients: [
          "1 cup quinoa, rinsed",
          "2 cups water",
          "1 cucumber, diced",
          "1 red bell pepper, diced",
          "1/2 red onion, finely chopped",
          "1/4 cup chopped parsley",
          "2 tbsp tahini",
          "1 lemon, juiced",
          "1 clove garlic, minced",
          "Salt and pepper to taste"
        ],
        steps: [
          "Cook quinoa in water according to package instructions. Let cool.",
          "In a large bowl, combine cooked quinoa with cucumber, bell pepper, red onion, and parsley.",
          "In a small bowl, whisk together tahini, lemon juice, garlic, salt, and pepper.",
          "Pour dressing over salad and toss to combine.",
          "Serve chilled or at room temperature."
        ]
      },
      {
        id: 2,
        title: "Avocado Toast with Egg",
        image: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        time: "15 mins",
        calories: "320 kcal",
        type: "Breakfast",
        diet: ["vegetarian"],
        description: "Simple, satisfying avocado toast topped with a perfectly cooked egg for protein.",
        ingredients: [
          "2 slices whole grain bread",
          "1 ripe avocado",
          "2 eggs",
          "1/2 tsp red pepper flakes",
          "Salt and pepper to taste",
          "1 tbsp olive oil"
        ],
        steps: [
          "Toast bread until golden and crisp.",
          "Mash avocado and spread evenly on toast. Season with salt, pepper, and red pepper flakes.",
          "Heat olive oil in a pan over medium heat. Crack eggs into pan and cook to desired doneness.",
          "Place cooked eggs on top of avocado toast.",
          "Serve immediately."
        ]
      },
      {
        id: 3,
        title: "Grilled Chicken with Roasted Vegetables",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        time: "40 mins",
        calories: "450 kcal",
        type: "Dinner",
        diet: ["low-carb"],
        description: "Juicy grilled chicken served with a medley of roasted seasonal vegetables.",
        ingredients: [
          "2 chicken breasts",
          "1 zucchini, sliced",
          "1 red bell pepper, sliced",
          "1 cup cherry tomatoes",
          "1 red onion, sliced",
          "2 tbsp olive oil",
          "1 tsp dried oregano",
          "Salt and pepper to taste"
        ],
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Toss vegetables with 1 tbsp olive oil, oregano, salt, and pepper. Spread on baking sheet.",
          "Roast vegetables for 25-30 minutes until tender and slightly caramelized.",
          "Meanwhile, season chicken with salt and pepper. Heat remaining oil in grill pan over medium-high heat.",
          "Grill chicken for 6-7 minutes per side until cooked through.",
          "Serve chicken with roasted vegetables."
        ]
      },
      {
        id: 4,
        title: "Berry Smoothie Bowl",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "10 mins",
        calories: "280 kcal",
        type: "Breakfast",
        diet: ["vegetarian", "vegan"],
        description: "A thick, creamy smoothie bowl packed with antioxidants and topped with crunchy granola.",
        ingredients: [
          "1 frozen banana",
          "1 cup mixed berries (strawberries, blueberries, raspberries)",
          "1/2 cup almond milk",
          "1 tbsp chia seeds",
          "1/4 cup granola",
          "1 tbsp almond butter",
          "Fresh berries for topping"
        ],
        steps: [
          "In a blender, combine frozen banana, mixed berries, almond milk, and chia seeds. Blend until smooth and thick.",
          "Pour into a bowl and top with granola, almond butter, and fresh berries.",
          "Serve immediately."
        ]
      },
      {
        id: 5,
        title: "Vegetable Stir Fry with Tofu",
        image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        time: "30 mins",
        calories: "380 kcal",
        type: "Dinner",
        diet: ["vegetarian", "vegan"],
        description: "Quick and flavorful stir fry packed with colorful vegetables and protein-rich tofu.",
        ingredients: [
          "1 block firm tofu, pressed and cubed",
          "2 cups mixed vegetables (broccoli, bell peppers, carrots, snap peas)",
          "2 cloves garlic, minced",
          "1 tbsp ginger, grated",
          "2 tbsp soy sauce",
          "1 tbsp sesame oil",
          "1 tsp honey or maple syrup",
          "1/2 tsp red pepper flakes",
          "2 tbsp vegetable oil",
          "Cooked brown rice for serving"
        ],
        steps: [
          "Heat 1 tbsp vegetable oil in a large pan or wok over medium-high heat. Add tofu and cook until golden on all sides. Remove and set aside.",
          "Add remaining oil to pan. Add garlic and ginger, stir for 30 seconds until fragrant.",
          "Add vegetables and stir fry for 5-6 minutes until crisp-tender.",
          "Return tofu to pan. Add soy sauce, sesame oil, honey, and red pepper flakes. Toss to combine.",
          "Serve hot over brown rice."
        ]
      },
      {
        id: 6,
        title: "Greek Yogurt Parfait",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "5 mins",
        calories: "250 kcal",
        type: "Snack",
        diet: ["vegetarian", "low-carb"],
        description: "Layers of creamy Greek yogurt, fresh fruit, and crunchy nuts for a perfect snack.",
        ingredients: [
          "1 cup Greek yogurt",
          "1/2 cup mixed berries",
          "2 tbsp granola",
          "1 tbsp honey",
          "1 tbsp chopped nuts (almonds or walnuts)"
        ],
        steps: [
          "In a glass or bowl, layer half the yogurt, then half the berries and granola.",
          "Repeat layers with remaining ingredients.",
          "Drizzle with honey and sprinkle with chopped nuts.",
          "Serve immediately or refrigerate for up to 2 hours."
        ]
      },
      {
        id: 7,
        title: "Chickpea Curry",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "35 mins",
        calories: "380 kcal",
        type: "Dinner",
        diet: ["vegetarian", "vegan"],
        description: "Aromatic and flavorful chickpea curry with coconut milk and spices.",
        ingredients: [
          "2 cans chickpeas, drained",
          "1 onion, diced",
          "3 cloves garlic, minced",
          "1 tbsp ginger, grated",
          "1 can coconut milk",
          "2 tbsp curry powder",
          "1 tsp turmeric",
          "1 tsp cumin",
          "1 tbsp olive oil",
          "Fresh cilantro for garnish"
        ],
        steps: [
          "Heat oil in a large pot over medium heat. Add onion and cook until soft.",
          "Add garlic and ginger, cook for 1 minute until fragrant.",
          "Add spices and stir for 30 seconds to toast them.",
          "Add chickpeas and coconut milk. Simmer for 20 minutes.",
          "Garnish with fresh cilantro and serve with rice."
        ]
      },
      {
        id: 8,
        title: "Oatmeal with Berries",
        image: "data:image/jpeg;base64,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",
        time: "10 mins",
        calories: "300 kcal",
        type: "Breakfast",
        diet: ["vegetarian", "vegan"],
        description: "Creamy oatmeal topped with fresh berries and a drizzle of honey.",
        ingredients: [
          "1/2 cup rolled oats",
          "1 cup water or milk",
          "Pinch of salt",
          "1/2 cup mixed berries",
          "1 tbsp honey or maple syrup",
          "1 tbsp chopped nuts"
        ],
        steps: [
          "Bring water/milk to a boil in a small pot.",
          "Add oats and salt, reduce heat to low and simmer for 5 minutes.",
          "Top with berries, honey, and nuts.",
          "Serve warm."
        ]
      },
      {
        id: 9,
        title: "Salmon with Asparagus",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        time: "25 mins",
        calories: "450 kcal",
        type: "Dinner",
        diet: ["low-carb"],
        description: "Perfectly baked salmon with roasted asparagus and lemon.",
        ingredients: [
          "2 salmon fillets",
          "1 bunch asparagus",
          "2 tbsp olive oil",
          "1 lemon, sliced",
          "Salt and pepper to taste",
          "1 tsp dried dill"
        ],
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Place salmon and asparagus on a baking sheet. Drizzle with olive oil.",
          "Season with salt, pepper, and dill. Add lemon slices.",
          "Bake for 15-20 minutes until salmon is cooked through.",
          "Serve immediately."
        ]
      },
      {
        id: 10,
        title: "Veggie Wrap",
        image: "vgwrap.png",
        time: "15 mins",
        calories: "350 kcal",
        type: "Lunch",
        diet: ["vegetarian"],
        description: "Fresh vegetable wrap with hummus and greens.",
        ingredients: [
          "1 whole wheat tortilla",
          "2 tbsp hummus",
          "1/4 avocado, sliced",
          "1/4 cup shredded carrots",
          "1/4 cup sliced cucumber",
          "Handful of spinach",
          "1 tbsp feta cheese (optional)"
        ],
        steps: [
          "Spread hummus on the tortilla.",
          "Layer with avocado, carrots, cucumber, and spinach.",
          "Sprinkle with feta if using.",
          "Roll up tightly and slice in half.",
          "Serve immediately or wrap for later."
        ]
      }
    ];
    const recipesContainer = document.getElementById('recipes-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const recipeModal = document.getElementById('recipe-modal');
    const closeModal = document.querySelector('.close-modal');
    let myRecipes = JSON.parse(localStorage.getItem('myRecipes')) || [];
    const addRecipeBtn = document.getElementById('add-recipe-btn');
    const addRecipeModal = document.getElementById('add-recipe-modal');
    const newRecipeForm = document.getElementById('new-recipe-form');
    const myRecipesContainer = document.getElementById('my-recipes-container');

    function displayRecipes(recipesToDisplay) {
      recipesContainer.innerHTML = '';
      if (recipesToDisplay.length === 0) {
        recipesContainer.innerHTML = '<p style="grid-column:1/-1;text-align:center;">No recipes match your filters. Try adjusting your criteria.</p>';
        return;
      }
      recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
          <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
              <span>${recipe.time}</span>
              <span>${recipe.calories}</span>
              <span>${recipe.type}</span>
            </div>
            <p class="recipe-desc">${recipe.description}</p>
            <div class="recipe-actions">
              <button class="view-recipe" data-id="${recipe.id}">View Recipe</button>
              <button class="like-btn" data-id="${recipe.id}"><i class="far fa-heart"></i> Like</button>
              <button class="comment-btn" data-id="${recipe.id}"><i class="far fa-comment"></i> Comment</button>
            </div>
          </div>
        `;
        recipesContainer.appendChild(recipeCard);
      });
      document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', () => {
          const recipeId = parseInt(button.dataset.id);
          const recipe = recipes.find(r => r.id === recipeId);
          showRecipeModal(recipe);
        });
      });
      document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          button.classList.toggle('active');
          button.innerHTML = button.classList.contains('active') 
            ? '<i class="fas fa-heart"></i> Liked' 
            : '<i class="far fa-heart"></i> Like';
        });
      });
      document.querySelectorAll('.comment-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          const recipeId = parseInt(button.dataset.id);
          const comment = prompt('Add your comment about this recipe:');
          if (comment) {
            alert('Comment added!');
          }
        });
      });
    }
    function displayMyRecipes() {
      myRecipesContainer.innerHTML = '';
      if (myRecipes.length === 0) {
        myRecipesContainer.innerHTML = '<p>You haven\'t added any recipes yet. Click "Add New Recipe" to get started!</p>';
        return;
      }      
      myRecipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
          <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-meta">
              <span>${recipe.time} mins</span>
              <span>${recipe.calories}</span>
              <span>${recipe.type}</span>
            </div>
            <p class="recipe-desc">${recipe.description}</p>
            <div class="recipe-actions">
              <button class="view-recipe" data-id="custom-${index}">View Recipe</button>
              <button class="delete-recipe" data-id="${index}"><i class="fas fa-trash"></i> Delete</button>
            </div>
          </div>
        `;
        myRecipesContainer.appendChild(recipeCard);
      });
      document.querySelectorAll('.delete-recipe').forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          const recipeId = parseInt(button.dataset.id);
          if (confirm('Are you sure you want to delete this recipe?')) {
            myRecipes.splice(recipeId, 1);
            localStorage.setItem('myRecipes', JSON.stringify(myRecipes));
            displayMyRecipes();
          }
        });
      });
      document.querySelectorAll('.view-recipe[data-id^="custom"]').forEach(button => {
        button.addEventListener('click', () => {
          const recipeId = parseInt(button.dataset.id.split('-')[1]);
          const recipe = myRecipes[recipeId];
          showRecipeModal(recipe);
        });
      });
    }

    function showRecipeModal(recipe) {
      document.getElementById('modal-recipe-img').src = recipe.image;
      document.getElementById('modal-recipe-img').alt = recipe.title;
      document.getElementById('modal-recipe-title').textContent = recipe.title;
      document.getElementById('modal-recipe-time').textContent = typeof recipe.time === 'number' ? `${recipe.time} mins` : recipe.time;
      document.getElementById('modal-recipe-calories').textContent = recipe.calories;
      document.getElementById('modal-recipe-type').textContent = recipe.type;
      document.getElementById('modal-recipe-desc').textContent = recipe.description;
      
      const ingredientsList = document.getElementById('modal-recipe-ingredients');
      ingredientsList.innerHTML = '';
      recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });
      
      const stepsList = document.getElementById('modal-recipe-steps');
      stepsList.innerHTML = '';
      recipe.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
      });
      
      recipeModal.style.display = 'block';
    }

    closeModal.addEventListener('click', () => {
      recipeModal.style.display = 'none';
    });

    addRecipeBtn.addEventListener('click', () => {
      if (!currentUser) {
        alert('Please login to add recipes');
        authModal.style.display = 'block';
        return;
      }
      addRecipeModal.style.display = 'block';
    });

    addRecipeModal.querySelector('.close-modal').addEventListener('click', () => {
      addRecipeModal.style.display = 'none';
    });

    newRecipeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newRecipe = {
        id: Date.now(),
        title: document.getElementById('recipe-name').value,
        image: document.getElementById('recipe-image').value,
        time: parseInt(document.getElementById('recipe-time').value),
        calories: document.getElementById('recipe-calories').value,
        type: document.getElementById('recipe-type').value,
        diet: Array.from(document.getElementById('recipe-diet').selectedOptions).map(opt => opt.value),
        description: document.getElementById('recipe-description').value,
        ingredients: document.getElementById('recipe-ingredients').value.split('\n').filter(line => line.trim()),
        steps: document.getElementById('recipe-steps').value.split('\n').filter(line => line.trim())
      };

      myRecipes.push(newRecipe);
      localStorage.setItem('myRecipes', JSON.stringify(myRecipes));
      
      addRecipeModal.style.display = 'none';
      newRecipeForm.reset();
      displayMyRecipes();
    });

    window.addEventListener('click', (e) => {
      if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
      }
      if (e.target === addRecipeModal) {
        addRecipeModal.style.display = 'none';
      }
      if (e.target === authModal) {
        authModal.style.display = 'none';
      }
    });

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const group = button.parentElement.parentElement;
        group.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const dietFilter = document.querySelector('.filter-group:nth-child(1) .filter-btn.active').dataset.filter;
        const typeFilter = document.querySelector('.filter-group:nth-child(2) .filter-btn.active').dataset.filter;
        const timeFilter = document.querySelector('.filter-group:nth-child(3) .filter-btn.active').dataset.filter;
        let filteredRecipes = recipes.filter(recipe => {
          if (dietFilter !== 'all' && !recipe.diet.includes(dietFilter)) return false;
          if (typeFilter !== 'all' && !recipe.type.toLowerCase().includes(typeFilter)) return false;
          if (timeFilter === 'quick' && parseInt(recipe.time) > 30) return false;
          if (timeFilter === 'medium' && (parseInt(recipe.time) <= 30 || parseInt(recipe.time) > 60)) return false;
          return true;
        });
        displayRecipes(filteredRecipes);
      });
    });

    displayRecipes(recipes);
    displayMyRecipes();

    let currentUser = null;
    const authModal = document.getElementById('auth-modal');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authTabs = document.querySelectorAll('.auth-tab');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const userProfile = document.getElementById('user-profile');
    const userAvatar = document.getElementById('user-avatar');
    const usernameDisplay = document.getElementById('username-display');

    userProfile.addEventListener('click', () => {
      if (currentUser) {
        alert(`Logged in as ${currentUser.name}\nSubscription: ${currentUser.isSubscribed ? 'Active' : 'Inactive'}`);
      } else {
        authModal.style.display = 'block';
      }
    });

    subscribeBtn.addEventListener('click', () => {
      if (!currentUser) {
        authModal.style.display = 'block';
        return;
      }
      if (currentUser.isSubscribed) {
        alert('You are already subscribed!');
        return;
      }
      const confirmSubscribe = confirm('Subscribe to weekly recipes for ₹199/month?');
      if (confirmSubscribe) {
        currentUser.isSubscribed = true;
        updateUserDisplay();
        subscribeBtn.textContent = 'Subscription Active';
        subscribeBtn.style.backgroundColor = 'var(--deep-orange)';
        alert('Thank you for subscribing! You will receive your first recipe pack soon.');
      }
    });

    authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.auth-form').forEach(form => {
          form.classList.remove('active');
        });
        document.getElementById(`${tab.dataset.tab}-form`).classList.add('active');
      });
    });

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.elements[0].value;
      const password = e.target.elements[1].value;
      if (email && password) {
        currentUser = {
          name: email.split('@')[0],
          email,
          isSubscribed: false
        };
        updateUserDisplay();
        authModal.style.display = 'none';
      }
    });

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = e.target.elements[0].value;
      const email = e.target.elements[1].value;
      const password = e.target.elements[2].value;
      const confirmPassword = e.target.elements[3].value;
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      if (name && email && password) {
        currentUser = {
          name,
          email,
          isSubscribed: false
        };
        updateUserDisplay();
        authModal.style.display = 'none';
      }
    });

    function updateUserDisplay() {
      if (currentUser) {
        userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
        usernameDisplay.textContent = currentUser.name;
        if (currentUser.isSubscribed) {
          subscribeBtn.textContent = 'Subscription Active';
          subscribeBtn.style.backgroundColor = 'var(--deep-orange)';
        }
      } else {
        userAvatar.textContent = '?';
        usernameDisplay.textContent = 'Guest';
      }
    }

    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        if(this.hash) {
          e.preventDefault();
          document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
