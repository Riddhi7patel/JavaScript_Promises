/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

let errorParagraph = document.querySelector("#error");
let visualList = document.querySelector("#list");


getList()

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)



.then((hobbits) => {
  hobbits.forEach((hobbitName) => {
    const hobbitLi = documents.creatElement("li");
    li.textContent = hobbitName;
    visualList.appendChild(hobbitLi);
  });
})

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)

.catch((rejectedValue) => {
  console.log(rejectedValue);
  errorParagraph.textContent = rejectedValue.message;
});

