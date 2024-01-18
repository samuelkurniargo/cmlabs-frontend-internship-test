const categoryUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

async function categoriesList() {
  const catgories = document.getElementById("category-list-container");
  const { data } = await axios.get(categoryUrl);

  data.categories.forEach((category) => {
    catgories.innerHTML += `
    <a href="/src/detailCategory/${category.strCategory}" class="group">
      <div class="relative flex flex-col justify-center bg-gray-50">
        <div
          class="group relative m-0 flex rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div
            class="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 drop-shadow-md">
            <img
              src="${category.strCategoryThumb}"
              alt="${category.strCategory} image" />
          </div>
          <div
            class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 class="font-serif text-2xl font-bold text-black">${category.strCategory}</h1>
          </div>
        </div>
      </div>
    </a>
    `;
  });
}

categoriesList();
