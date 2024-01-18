let getCategoriesList = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = response.data.categories;
    return data;
  } catch (error) {
    console.log(error);
  }
};

let Home = {
  render: async () => {
    let categories = await getCategoriesList();
    let view = `
        <div class="hero">
            <div class="bg-white">
            <div class="relative isolate px-6 pt-10 lg:px-8">
                <div class="mx-auto max-w-2xl py-28 sm:py-20 lg:py-28">
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Unlock Culinary Delights at Your
                    Fingertips</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Welcome to Meals Receipt, where passion meets the plate!
                    Unleash your inner chef and embark on a culinary journey like never before. Our handpicked collection
                    of mouthwatering meal receipts brings the art of cooking to your kitchen.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#"
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore
                        Now</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div id="catgories-list">
            <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 class="sr-only">Meals</h2>
              <div id="category-list-container"
              class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              ${categories
                .map(
                  (category) => ` 
                  <a href="#/category/${category.strCategory}" class="group">
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
                  </a>`
                )
                .join("\n ")}
              </div>
            </div>
            </div>
        </div>
    `;
    return view;
  },
  afterRender: async () => {},
};

export default Home;
