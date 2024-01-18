import Utils from "../../services/Utils.js";

let getCategoryList = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );
    const data = response.data.meals;
    return data;
  } catch (error) {
    console.log(error);
  }
};

let Category = {
  render: async () => {
    let request = Utils.parseRequestURL();
    let mealsList = await getCategoryList(request.id);

    return `
          <div class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <section class="bg-w sm:py-12 lg:py-20 z-40 relative">
              <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-black sm:text-4xl lg:text-5xl mb-20">
                 ${request.id.toUpperCase()} MEALS
                </h2>
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 ">
                ${mealsList
                  .map((meal) => {
                    return `
                    <a href="#/category/${
                      request.id + "/" + meal.idMeal
                    }" class=" shadow-md relative rounded-2xl">
                      <div class="h-full relative shadow-md overflow-hidden group rounded-2xl">
                        <div
                          class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
                          <div class="w-full h-full p-5 relative">
                            <div
                              class="absolute bottom-16 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500 ">
                              <h2 class="text-2xl font-bold  text-white mb-0 pb-1">${
                                meal.strMeal
                              }</h2>
                            </div>
                          </div>
                        </div>
                        <img src="${meal.strMealThumb}"
                          class="w-full z-0  h-full object-fill example ">
                      </div>
                  </a>
                  `;
                  })
                  .join("\n ")}
                </div>
              </div>
            </section>
        </div>`;
  },
  afterRender: async () => {},
};

export default Category;
