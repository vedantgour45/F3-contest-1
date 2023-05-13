const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  try {
    await PromiseAPI1();
    await PromiseAPI2();
    await PromiseAPI3();
  } catch (error) {
    console.error(error);
  }
});

function PromiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      const resultDiv = document.getElementById("container_1");

      console.log(data);
      const tablehead = `<thead>
                            <tr>
                              <th>Id</th>
                              <th>Title</th>
                              <th>Body</th>
                              <th>UserID</th>
                              <th colspan="3">Tags</th>
                              <th>Reactions</th>
                            </tr>
                          </thead>`;
      resultDiv.innerHTML += tablehead;
      data.posts.forEach((el) => {
        const tr = `
        <tbody>
          <tr>
            <td>${el.id}</td>
            <td>${el.title}</td>
            <td>${el.body}</td>
            <td>${el.userId}</td>
            <td>${el.tags[0]}</td>
            <td>${el.tags[1]}</td>
            <td>${el.tags[2]}</td>
            <td>${el.reactions}</td>
          </tr>
        </tbody>
        `;
        resultDiv.innerHTML += tr;
      });

      resultDiv.innerHTML += `<br>`;

      resolve(true);
    }, 1000);
  });
}

function PromiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const resultDiv = document.getElementById("container_2");

      console.log(data);
      const tablehead = ` <thead>
                            <tr>
                              <th>Id</th>
                              <th>Title</th>
                              <th>Description</th>
                              <th>Price</th>
                              <th>Discount</th>
                              <th>Rating</th>
                              <th>Stock</th>
                              <th>Brand</th>
                              <th>Category</th>
                              <th>Thumbnail</th>
                              <th colspan="5">Images</th>
                            </tr>
                          </thead>`;
      resultDiv.innerHTML += tablehead;
      data.products.forEach((el) => {
        const tr = `<tbody>
                      <tr>
                        <td>${el.id}</td>
                        <td>${el.title}</td>
                        <td>${el.description}</td>
                        <td>${el.price}</td>
                        <td>${el.discountPercentage}%</td>
                        <td>${el.rating}</td>
                        <td>${el.stock}</td>
                        <td>${el.brand}</td>
                        <td>${el.category}</td>
                        <td><img src="${el.thumbnail}" alt="No preview available" style="width: 100px;"></td>
                        <td><img src="${el.images[0]}" alt="No preview available" style="width: 100px;"></td>
                        <td><img src="${el.images[1]}" alt="No preview available" style="width: 100px;"></td>
                        <td><img src="${el.images[2]}" alt="No preview available" style="width: 100px;"></td>
                        <td><img src="${el.images[3]}" alt="No preview available" style="width: 100px;"></td>
                        <td><img src="${el.images[4]}" alt="No preview available" style="width: 100px;"></td>
                      </tr>
                    </tbody>
        `;
        resultDiv.innerHTML += tr;
      });

      resultDiv.innerHTML += `<br>`;

      resolve(true);
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      const resultDiv = document.getElementById("container_3");

      console.log(data);

      const tablehead = ` <thead>
                            <tr>
                              <th>Id</th>
                              <th>TODO</th>
                              <th>Completed</th>
                              <th>UserID</th>
                            </tr>
                          </thead>`;
      resultDiv.innerHTML += tablehead;
      data.todos.forEach((el) => {
        const tr = `<tbody>
                      <tr>
                        <td>${el.id}</td>
                        <td>${el.todo}</td>
                        <td>${el.completed}</td>
                        <td>${el.userId}</td>
                      </tr>
                    </tbody>`;
        resultDiv.innerHTML += tr;
      });

      resolve(true);
    }, 3000);
  });
}
