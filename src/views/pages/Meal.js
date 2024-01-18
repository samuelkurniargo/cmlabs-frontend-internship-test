import Utils from "../../services/Utils.js";

let getDetailMeal = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = response.data.meals[0];
    return data;
  } catch (error) {
    console.log(error);
  }
};

let Meal = {
  render: async () => {
    let request = Utils.parseRequestURL();
    let meal = await getDetailMeal(request.verb);

    const ingredients = [];
    const instructionsArray = meal.strInstructions.split("\r\n");

    for (let i = 1; i <= 20; i++) {
      const measureKey = `strMeasure${i}`;
      const ingredientKey = `strIngredient${i}`;

      if (meal[measureKey] && meal[ingredientKey]) {
        ingredients.push(`${meal[measureKey]} ${meal[ingredientKey]}`);
      } else {
        break;
      }
    }
    let view = `
    <section class="bg-white">
    <div class="max-w-screen-xl mx-auto">
      <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style="height: 24em;">
        <div class="absolute left-0 bottom-0 w-full h-full z-10"
          style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
        <img
          src="${meal.strMealThumb}"
          class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a href="#/category/${meal.strCategory}"
            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">${
              meal.strCategory
            }</a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            ${meal.strMeal}
          </h2>
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <div class="ingredients">
          <h2 class="text-2xl font-bold">Ingredients</h2>
          <div class="ingredients-card mt-3 p-6 border bg-gray-100">
            <ul>
            ${ingredients
              .map((ingredient) => {
                return `<li class="py-3 border-b-2">${ingredient}</li>`;
              })
              .join("\n ")}
            </ul>
          </div>
          <div class="steps mt-12">
            <h2 class="text-2xl text-gray-800 font-bold mb-2">Steps</h2>
            <div class="steps-card px-6">
              <ol class="list-decimal">
                ${instructionsArray
                  .map((step) => {
                    return `<li class="py-3">${step}</li>`;
                  })
                  .join("\n ")}
              </ol>
          </div>
          </div>
        </div>
      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <div class="steps mt-12">
            <h2 class="text-2xl text-gray-800 font-bold mb-2">Tutorials</h2>
            <iframe class="w-full aspect-video" src="${meal.strYoutube.replace(
              "watch?v=",
              "embed/"
            )}"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return view;
  },
  afterRender: async () => {},
};

export default Meal;
