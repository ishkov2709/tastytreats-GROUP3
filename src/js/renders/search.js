import debounce from 'lodash.debounce';
import { searchImages } from '../service/categorySearch';
import Notiflix from 'notiflix';

import renderItem from './renders';
import startPagination from '../utils/pagination';

import { OpenModal } from '../utils/modal-recipes';

// Refs

const searchButton = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const recipeContainer = document.querySelector('#image-container');
const paginationBox = document.getElementById('pagination');
// Vars

let searchQuery = '';

const debouncedSearch = debounce(searchImagesAndDisplay, 300);

function handleSearch(e) {
  if (e.target.value.trim() === '') {
    return Notiflix.Notify.info('Please enter a search query.');
  }
  searchQuery =
    e.target.value.trim().charAt(0).toUpperCase() +
    e.target.value.trim().slice(1).toLowerCase();
  debouncedSearch();
  searchInput.value = '';
}

export async function searchImagesAndDisplay(currentPage = 1) {
  try {
    const { page, perPage, totalPages, results } = await searchImages(
      searchQuery,
      currentPage
    );
    const recipes = await [
      ...results.map(({ title, description, preview, rating, _id }) =>
        renderItem(title, description, preview, rating, _id)
      ),
    ].join('');
    if (totalPages > 1) {
      paginationBox.style.display = 'block';
      startPagination(page, perPage, totalPages, searchImagesAndDisplay);
    } else {
      paginationBox.style.display = 'none';
    }
    recipeContainer.innerHTML = recipes;
  } catch (error) {
    console.error(error);
  }
}

function handleInput() {
  if (searchInput.value.trim() !== '') {
    searchButton.classList.add('hidden');
  } else {
    searchButton.classList.remove('hidden');
  }
}

function toggleFavriteRecipe(currentBtn) {
  const recipeInfo = JSON.parse(currentBtn.dataset.info);

  currentBtn.classList.toggle('active');
  const storage = JSON.parse(localStorage.getItem('favorites')) ?? [];
  if (currentBtn.classList.contains('active')) {
    localStorage.setItem('favorites', JSON.stringify([...storage, recipeInfo]));
  } else {
    localStorage.setItem(
      'favorites',
      JSON.stringify([...storage.filter(el => el.id !== recipeInfo.id)])
    );
  }
}

function hendleClickOnRecipes({ target }) {
  if (!target.closest('button')) return;

  const currentBtn = target.closest('button');

  if (currentBtn.name === 'favorite') {
    toggleFavriteRecipe(currentBtn);
  }

  if (currentBtn.name === 'details') {
    OpenModal(currentBtn);
  }
}

searchInput.addEventListener('input', handleInput);

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleSearch(event);
  }
});

recipeContainer.addEventListener('click', hendleClickOnRecipes);
